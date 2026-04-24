import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import NotFound from "./pages/NotFound";
import initialContacts from "./data/initialContacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route path="/contacts" element={
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        } />
        <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
