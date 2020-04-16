import React from 'react';
import NavBar from './components/NavBar';
import MySurveys from './components/MySurveys';
import NewSurveyForm from './components/NewSurveyForm';
import NewQuestionsForm from './components/NewQuestionsForm';

function App() {
	return (
		<div className="App">
			<NavBar />
			{/* <MySurveys /> */}
			<NewSurveyForm />
			<NewQuestionsForm />
		</div>
	);
}

export default App;
