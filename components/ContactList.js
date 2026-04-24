import React from "react";
import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contact List</h2>

      {contacts.map(contact => (
        <div key={contact.id} style={{ margin: "10px 0" }}>
          <Link to={`/contacts/${contact.id}`}>
            {contact.name}
          </Link>
          {" - "}
          {contact.phone}

          <button onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
