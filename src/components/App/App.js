import { useState, useEffect, useRef } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Container } from "./App.styled";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    const contacts = window.localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const onSubmit = (newContact) => {
    setContacts((prevContacts) => {
      return [newContact, ...prevContacts];
    });
  };
  const onSearch = (filter) => {
    setFilter(filter);
  };

  const onDelete = (id) => {
    const contactsFilter = contacts.filter((contact) => contact.id !== id);
    setContacts(contactsFilter);
  };

  const getFiltredContacts = () => {
    if (filter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onChange={onSearch} />
      <ContactList onDelete={onDelete} filtredContacts={getFiltredContacts()} />
    </Container>
  );
};

export default App;
