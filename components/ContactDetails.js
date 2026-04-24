import React from "react";
import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    return <h2>Contact not found</h2>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
}

export default ContactDetails;
