import React from "react";
import { Button, Table } from "semantic-ui-react";
import Contact from "./Contact";

const Contacts = ({ contacts, deleteContact, updateContact }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {contacts.map((contact) => (
        <Contact
          updateContact={updateContact}
          deleteContact={deleteContact}
          {...contact}
        />
      ))}
    </Table.Body>
  </Table>
);

export default Contacts;
