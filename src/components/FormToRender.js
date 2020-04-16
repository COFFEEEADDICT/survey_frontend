import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
export default class FormToRender extends Component {
	render() {
		const { handleChange } = this.props;
		return (
			<Form.Field>
				<label>Question Title:</label>
				<input onChange={(e) => handleChange(e)} placeholder="Question Title" name="title" />
				<Button onClick={() => this.props.removeQuestion(this.props.question)}>Remove Question</Button>
			</Form.Field>
		);
	}
}
