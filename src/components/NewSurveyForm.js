import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import FormToRender from './FormToRender';
export default class NewSurveyForm extends Component {
	state = {
		title: '',
		description: '',
		questions: [ '' ]
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

	addQuestion = () => {
		this.setState({
			questions: [ ...this.state.questions, '' ]
		});
	};

	removeQuestion = (question) => {
		this.setState({
			questions: this.state.questions.filter((q) => q !== question)
		});
		// this.setState({
		// 	// questions: [ ...this.state.questions.slice(this.state.questions, [ ...(this.state.questions - 1) ]) ]
		// 	questions: this.state.questions.splice(
		// 		[ ...this.state.questions.length ],
		// 		[ ...(this.state.questions.length - 1) ]
		// 	)
		// });
	};
	renderQuestions = () => {
		return this.state.questions.map((question, index) => (
			<FormToRender removeQuestion={this.removeQuestion} key={index} question={question} indexId={index} />
		));
	};
	changeQuestion = (event, indexId) => {
		const newQuestionsArray = [ ...this.state.questions ];
		newQuestionsArray[indexId] = event.target.value;

		this.setState({ questions: newQuestionsArray });
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
					{this.renderQuestions()}
					<Button onClick={this.addQuestion}>Add Question</Button>
					<Button onClick={this.removeQuestion}>Remove Question</Button>
					<Button onClick={this.handleSubmit} type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}
