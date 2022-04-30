import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contacting={contact}
        sendDeleteContactId={deleteContactHandler}
      ></ContactCard>
    );
  });

  return (
    <div className="ui main">
      <div className="ui container">
        <h2>
          Contact List
          <Link to="/add">
            <button className="ui right floated primary button blue">
              Add Contact
            </button>
          </Link>
        </h2>
      </div>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
