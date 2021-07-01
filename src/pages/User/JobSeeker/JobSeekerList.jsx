import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import JobseekerService from "../../../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobseekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2" size = "large" >
        <Icon name="globe" />
        <Header.Content>JobSeeker List</Header.Content>
      </Header>

      <Table singleLine inverted color="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeekers) => (
            <Table.Row key={jobSeekers.id}>
              <Table.Cell>{jobSeekers.firstName}</Table.Cell>
              <Table.Cell>{jobSeekers.lastName}</Table.Cell>
              <Table.Cell>{jobSeekers.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
