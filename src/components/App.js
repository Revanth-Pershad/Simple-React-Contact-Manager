import React, { useState, useEffect } from "react";
import "./App.css";
import AddContacts from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const sendContacts = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  useEffect(() => {
    console.log("Use Effect 1");
    const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveProducts) setContacts(retriveProducts);
  }, []);

  useEffect(() => {
    console.log("Use Effect 2");
    if (contacts?.length) {
      // only store the state if products exists and it's length is greater than 0
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ContactList
                  key={contacts.id}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              </div>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <div>
                <AddContacts sendContacts={sendContacts} />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
