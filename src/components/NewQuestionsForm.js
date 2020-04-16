import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import FormToRender from './FormToRender';
export default class NewQuestionsForm extends Component {
	state = {
		count: 1,
		value: [],
		questions: []
	};

	handleChange = (e) => {
		let question = {
			title: e.target.value
		};
		this.setState({
			questions: [ ...this.state.questions, question ]
		});
		console.log(this.state.questions);
	};
	addQuestion = () => {
		this.setState({ count: this.state.count + 1 });
	};
	removeQuestion = () => {
		this.setState({ count: this.state.count - 1 });
	};

	displayForm() {
		let forms = [];
		for (let i = 0; i < this.state.count; i++) {
			forms.push(
				<div key={i}>
					<FormToRender handleChange={this.handleChange} value={this.state.value[i] || ''} />
				</div>
			);
		}
		return forms || null;
	}

	render() {
		return (
			<Container text="true">
				<div>
					<h1>Add your questions:</h1>
				</div>
				<Form>
					{this.displayForm()}
					<Button onClick={this.addQuestion}>Add Question</Button>
					<Button onClick={this.removeQuestion}>Remove Question</Button>
					<Button type="submit">Submit questions</Button>
				</Form>
			</Container>
		);
	}
}

class ExampleFullForm {
	state = {
		title: '',
		description: '',
		questions: [ 'Whats your name', 'Age', 'Hous' ]
	};

	renderQuestions = () => {
		return this.state.questions.map((question, index) => (
			<FormToRender key={index} question={question} indexId={index} />
		));
	};

	changeQuestion = (event, indexId) => {
		const newQuestionsArray = [ ...this.state.questions ];
		newQuestionsArray[indexId] = event.target.value;

		this.setState({ questions: newQuestionsArray });
	};

	addQuestion = () => {
		this.setState({
			questions: [ ...this.state.questions, '' ]
		});
	};

	render() {
		return (
			<form>
				{this.state.title}
				{this.state.description}
				{this.renderQuestions()}
				<input type="submit" />
			</form>
		);
	}
}

const SingleQuestionInput = (props) => {
	return <input value={props.question} onChange={(e) => props.changeQuestion(e, props.indexId)} />;
};
