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
