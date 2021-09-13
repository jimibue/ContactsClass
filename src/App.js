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
  render() {
    return (
      <Container>
        <ContactForm />
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
