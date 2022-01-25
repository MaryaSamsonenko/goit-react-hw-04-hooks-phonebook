import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Form, Label, Input, ButtonSubmit } from "./ContactForm.styled";

export const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [number, setNumber] = useState("");
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasNameInContacts = contacts.find(
      (contact) =>
        contact.name.toLowerCase() ===
        event.target.elements.name.value.toLowerCase()
    );
    if (hasNameInContacts) {
      alert(`${event.target.elements.name.value} is already in contacts`);
      return;
    }
    onSubmit({ name, number, id: nanoid(4) });
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name </Label>
      <div>
        <Input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter name"
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <Label htmlFor="number">Number </Label>
      <div>
        <Input
          type="tel"
          name="number"
          autoComplete="off"
          placeholder="Enter tel"
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
