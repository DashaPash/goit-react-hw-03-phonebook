import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form';
import Contacts from '../ContactsList';
import Filter from '../Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = { id: nanoid(), ...data };

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name}is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <section className={s.section}>
          <h1 className={s.title}>Phonebook</h1>
          <Form onSubmit={this.addContact} />
          <h2 className={s.title}>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <Contacts contacts={filterContacts} onDelete={this.deleteContact} />
        </section>
      </>
    );
  }
}

export default App;
