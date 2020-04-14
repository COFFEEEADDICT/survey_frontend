import React from 'react';
import './App.css';
import HomepageLayout from './components/HomepageLayout';
import LoginForm from './components/acc/login';

function App() {

  // constructor(){
  //   super()
  //   this.state.{
  //     user:null,
  //     password: null}
  // }
  
  return (
    <div className="App">
       < HomepageLayout />
       < LoginForm />
    </div>
  );
}

export default App;
