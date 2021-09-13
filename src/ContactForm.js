import React from "react";
import { Button, Form } from "semantic-ui-react";

// hooks - only use hooks in functional components
class ContactForm extends React.Component {
  state = {
    name: this.props.name ? this.props.name : "",
    phone: this.props.phone ? this.props.phone : "",
  };
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };
  handleSubmit = (e) => {
    // axios call if using be
    // let res = await axios.post('someurl', this.state)
    // update contacts State (ie add contact)

    if (this.props.id) {
      this.props.updateContact({ id: this.props.id, ...this.state });
      this.props.toggleForm();
    } else {
      this.props.addContact({ id: Math.random(), ...this.state });
    }
    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name={"name"}
              onChange={this.handleChange}
              value={this.state.name}
              label="Name"
            />
            <Form.Input
              name={"phone"}
              onChange={this.handleChange}
              value={this.state.phone}
              label="Phone"
            />
          </Form.Group>
          <Button color="blue">{this.props.id ? "Update" : "Add"}</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
