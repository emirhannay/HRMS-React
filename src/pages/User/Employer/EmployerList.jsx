import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="globe" />
        <Header.Content>Employer List</Header.Content>
      </Header>
      <Table singleLine inverted color="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employers) => (
            <Table.Row key={employers.id}>
              <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.phoneNumber}</Table.Cell>
              <Table.Cell>{employers.website}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}