import React, { useState, useEffect } from "react";
import { Table, Icon, Header } from "semantic-ui-react";
import JobPositionService from "../../../services/jobPositionService";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  });

  return (
    <div>
      <Header as="h2" size="large">
        <Icon name="globe" />
        <Header.Content>Job Position List</Header.Content>
      </Header>

      <Table singleLine inverted color="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.jobTitle}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
