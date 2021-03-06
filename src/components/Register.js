import React from 'react';

class Register extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      usuario: '',
      password: ''
    }
  }

  onUsuarioChange = (event) => {
    this.setState({usuario: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://obscure-depths-14752.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name: this.state.usuario,
        password: this.state.password,
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user){
        console.log(user);
        this.props.onRouteChange('home');
      }
    
     /*
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
        
      
    })*/
  }
    )}

//const Register = ({ onRouteChange }) => {
  render() {
    const { onRouteChange } = this.props;
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
      <div className="measure">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Registrar</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Usuario</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onUsuarioChange}
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
        value="Registrar"
        />
      </div>
      <div className="lh-copy mt3">
      </div>
    </div>
    <p onClick={() => onRouteChange('signout')} className='pointer'>Signin</p>
  </main>
  </article>
  
      );
  }
   
}

export default Register