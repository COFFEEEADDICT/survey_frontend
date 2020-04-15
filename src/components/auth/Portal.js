import React, { Fragment } from 'react';
import Log_in from './Log_in';
import Signup from './Signup';


class Portal extends React.Component {

  constructor(){
    super()
    this.state = {
      login: true
    }
  }
  
      handleClick = () => {
      this.setState({ login: !this.state.login })
      }

      handleSubmit = () => {}
  
      
  render() {
    return (
      <Fragment>
          
        {this.state.login ? <Log_in handleClick={this.handleClick} /> : <Signup handleSubmit={this.handleSubmit}/>}
      
      </Fragment>
    )
  }

}

export default Portal
