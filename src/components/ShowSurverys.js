import React from "react";
import SurveyCard from "SurveyCard";

class ShowSurverys extends React.Component {
    
    constructor(){
        super()
    
        this.state = {
          collection:[{question: "hello?", answer: "yes"} 
                      {question: "okk?", answer: "no"}
                ]
        }
    
      }



    renderEach(props){
        const theProps =  props.bots.bots	 
        return theProps.map(s => <SurveyCard bot={s} key={s.id} /> )
    }   

    Fetch(){
        fetch(surveyURL)
        .then(res => res.json())
        .then(data => console.log(data))
        // .then( data => this.setState({bots:  data})
    }


    render(){

    const surveyURL = 'http://localhost:3000/users/1'


        return (
        <div >
            {  }
        </div>
        );

    }

}
  export default ShowSurverys;
