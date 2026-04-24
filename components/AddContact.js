import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now().toString(),
      ...form
    };

    addContact(newContact);
    navigate("/contacts");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
