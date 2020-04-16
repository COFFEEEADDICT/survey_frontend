import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
export default class NewSurveyForm extends Component {
	state = {
		title: '',
		description: ''
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.postNewForm();
	};
	postNewForm = () => {
		return fetch('http://localhost:3001/surveys', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				title: this.state.title,
				description: this.state.description,
				user_id: 1
			})
		})
			.then((r) => r.json())
			.then((data) => console.log(data));
	};
	render() {
		return (
			<Container text="true">
				<Form widths="equal" size="small">
					<Form.Field onChange={(e) => this.handleChange(e)}>
						<label>Survey Title</label>
						<input placeholder="Survey Title" name="title" />
					</Form.Field>
					<Form.Field onChange={(e) => this.handleChange(e)}>
						<label>Survey Description</label>
						<input placeholder="Survey Description" name="description" />
					</Form.Field>
					<Button onClick={this.handleSubmit} type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}
