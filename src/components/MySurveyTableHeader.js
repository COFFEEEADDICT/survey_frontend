import React from 'react';
import { Table } from 'semantic-ui-react';

export default function MySurveyTableHeader() {
	return (
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Survey Name</Table.HeaderCell>
				<Table.HeaderCell>Status</Table.HeaderCell>
				<Table.HeaderCell>Survey Description</Table.HeaderCell>
			</Table.Row>
		</Table.Header>
	);
}
