import React, { Component } from 'react';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home'

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }


  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({ isSignedIn: false })
    } else if (route === 'home'){
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render(){
    return (
      <div className="App">
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
       { 
         this.state.route === 'home'
          ?
          <div>
            <Home /> 
          </div>
          : (
            this.state.route === 'signout'
            ?
            <SignIn onRouteChange={this.onRouteChange} /> 
            : 
            <Register onRouteChange={this.onRouteChange}/>
          )
          
       }
      </div>
    );
  }

}

export default App;
