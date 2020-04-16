import React from "react";

const SurveyCard = props => {
  
  
  return (
    <div>
          <div>
           <h2>{props.question}</h2>  <br></br>
           {props.response}
          </div>

    </div>
  );

};

export default SurveyCard;
