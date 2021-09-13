import React from "react";
import { Button, Table } from "semantic-ui-react";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
  state = { showForm: false };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  render() {
    if (this.state.showForm) {
      return (
        <>
          <ContactForm
            toggleForm={this.toggleForm}
            updateContact={this.props.updateContact}
            {...this.props}
          />
          <Button onClick={this.toggleForm} color="blue">
            cancel
          </Button>
        </>
      );
    }
    return (
      <Table.Row key={this.props.id}>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.phone}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.deleteContact(this.props.id)}
            color="blue"
          >
            Delete
          </Button>
          <Button onClick={this.toggleForm} color="blue">
            update
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Contact;
