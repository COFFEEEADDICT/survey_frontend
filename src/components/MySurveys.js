import React, { Component, Fragment } from 'react';
import { Table } from 'semantic-ui-react';
import MySurveyHeader from './MySurveyHeader';
import MySurveyTableHeader from './MySurveyTableHeader';
import MySurveyTableBody from './MySurveyTableBody';
export default class MySurveys extends Component {
	state = {
		surveys: []
	};
	componentDidMount() {
		fetch('http://localhost:3001/users/1').then((r) => r.json()).then((data) =>
			this.setState({
				surveys: data.surveys
			})
		);
	}
	renderUserSurveys() {
		return this.state.surveys.map((survey) => {
			return <MySurveyTableBody survey={survey} key={survey.id} />;
		});
	}
	render() {
		return (
			<Fragment>
				<MySurveyHeader />
				<Table selectable="true" textAlign="center">
					<MySurveyTableHeader />
					<Table.Body>{this.renderUserSurveys()}</Table.Body>
				</Table>
			</Fragment>
		);
	}
}
