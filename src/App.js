import React, { Component } from 'react';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home'

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'signin'
    }
  }


  onRouteChange = (route) => {
    this.setState({ route: route })
  }

  render(){
    return (
      <div className="App">
      <Navigation onRouteChange={this.onRouteChange}/>
       { 
         this.state.route === 'signin'
          ?<SignIn onRouteChange={this.onRouteChange} /> 
          : <div>
       <Home /> 
       </div>
       }
      </div>
    );
  }

}

export default App;
