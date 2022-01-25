import React, { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmit = (newContact) => {
    this.setState((prevState) => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };
  onSearch = (filter) => {
    this.setState((prevState) => {
      return { ...prevState, filter: filter };
    });
  };

  onDelete = (id) => {
    const contactsFilter = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState((prevState) => {
      return { ...prevState, contacts: [...contactsFilter] };
    });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter onChange={this.onSearch} />
        <ContactList
          onDelete={this.onDelete}
          filtredContacts={this.getFiltredContacts()}
        />
      </Container>
    );
  }
}

export default App;
