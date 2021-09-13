import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Counter from "./Counter";
import CounterFunc from "./CounterFunc";

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656" },
      { id: 2, name: "George", phone: "626-567-1872" },
      { id: 3, name: "Cosmo", phone: "802-134-9876" },
    ],
  };
  // this will be called on first mount
  async componentDidMount() {
    console.log("mounted");
  }
  // this will be called when state is changed
  componentDidUpdate() {
    console.log("updated");
  }
  addContact = (contact) => {
    console.log(contact);
    // calling setState will trigger render()
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  updateContact = (contact) => {
    let updateContacts = this.state.contacts.map((c) =>
      c.id === contact.id ? contact : c
    );

    this.setState({
      contacts: updateContacts,
    });
  };

  deleteContact = (id) => {
    let filteredContacts = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts: filteredContacts,
    });
  };
  render() {
    return (
      <Container>
        <ContactForm addContact={this.addContact} />
        <Contacts
          updateContact={this.updateContact}
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </Container>
    );
  }
}

export default App;
