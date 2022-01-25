import PropTypes from "prop-types";
import { ContactItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";

export const ContactList = ({ filtredContacts, onDelete }) => {
  return (
    <List>
      {filtredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};
ContactList.propType = {
  filtredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
