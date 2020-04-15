import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
export default class FormToRender extends Component {
	render() {
		return (
			<Form.Field>
				<label>Question Title:</label>
				<input placeholder="Qestion Title" name="title" />
			</Form.Field>
		);
	}
}
