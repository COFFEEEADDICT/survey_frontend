import React from 'react';
import { Table } from 'semantic-ui-react';

export default function MySurveyTableBody(props) {
	return (
		<Table.Row>
			<Table.Cell>{props.survey.title}</Table.Cell>
			<Table.Cell>{props.survey.end_date ? props.survey.end_date : 'Expired'}</Table.Cell>
			<Table.Cell>{props.survey.description}</Table.Cell>
		</Table.Row>
	);
}
