import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getJobAdverts().then((result) => setJobAdverts(result.data.data));
  });

  return (
    <div>
      <Header as="h2" >
        <Icon name="globe" />
        <Header.Content>Job Advert List</Header.Content>
      </Header>
     

      <Table color="grey" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdverts) => (
            <Table.Row key={jobAdverts.id}>
              <Table.Cell>{jobAdverts.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdverts.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdverts.city.name}</Table.Cell>
              <Table.Cell>{jobAdverts.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdverts.deadline}</Table.Cell>
              <Table.Cell>{jobAdverts.open.toString()}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}