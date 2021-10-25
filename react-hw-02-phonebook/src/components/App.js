import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterForm/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  addContact = ({ name, number }) => {
    const checkOnExist = this.state.contacts.find(
      contact => contact.name === name
    );

    const checkLength = string => string.length < 1;
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      alert("Please, fill in all required entry fields");
      return;
    }

    if (checkOnExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}

        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}