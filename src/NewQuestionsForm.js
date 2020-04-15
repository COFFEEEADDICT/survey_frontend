import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import FormToRender from './components/FormToRender';
export default class NewQuestionsForm extends Component {
	state = {
		count: 1,
		value: []
	};
	addQuestion = () => {
		this.setState({ count: this.state.count + 1 }); //on click add more forms
	};
	removeQuestion = () => {
		this.setState({ count: this.state.count - 1 }); //on click remove  form
	};

	displayForm() {
		let forms = [];
		for (let i = 0; i < this.state.count; i++) {
			forms.push(
				<div key={i}>
					<FormToRender value={this.state.value[i] || ''} />
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
					<Button onClick={this.addQuestion} type="submit">
						Add Question
					</Button>
					<Button onClick={this.removeQuestion} type="submit">
						Remove Question
					</Button>
				</Form>
			</Container>
		);
	}
}
