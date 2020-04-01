import React from 'react';

class SignIn extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      signUser: '',
      signInPassword: ''
    }
  }

  onUserChange = (event) => {
    this.setState({signUser: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {/*
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        user: this.state.signUser,
        password: this.state.signInPassword
      })
    })
    
    .then(response => response.json())
    .then(data => {
      if(data === 'acceso garantizado'){*/
        this.props.onRouteChange('home');
    //  }
  //  })
    /*
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })*/
  }

   render(){
    const { onRouteChange } = this.props;
 //const SignIn = ({ onRouteChange }) =>{
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
      <div className="measure">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Iniciar sesion</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Usuario</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onUserChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          onChange={this.onPasswordChange}
          />
        </div>
      </fieldset>
      <div className="">
        <input 
        onClick={this.onSubmitSignIn}
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Iniciar Sesion"
        />
      </div>
    </div>
    <p onClick={() => onRouteChange('register')} className='pointer'>Registrar</p>
  </main>
  </article>
     );
  }
           }

export default SignIn