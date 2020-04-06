import React, { Component } from 'react';
import axios from 'axios';

class Agregar extends Component {


  state = {
    tipo: '',
    modelo: '',
    precio: '',
    link: '',
    file: null,
    display: 'block',
    message: 'none'

  }

  handleTipo(e){
    let tipo = e.target.value;
    this.setState({ tipo: tipo })
    this.setState({ message: 'none' })
  }

  handleModelo(e){
    let modelo = e.target.value;
    this.setState({ modelo: modelo });
  }

  handlePrecio(e){
    let precio = e.target.value;
    this.setState({ precio: precio })
  }

  handleLink(e){
    let link = e.target.value;
    this.setState({ link: link });
  }

  handleFile(e){
    let file = e.target.files[0];
    this.setState({ file: file})
  }

  onSubmitAcc = (e) => {
    this.setState({ display: 'none' });
    let tipo = this.state.tipo;
    let modelo = this.state.modelo;
    let precio = this.state.precio;
    let link = this.state.link;
    let file = this.state.file;
    let formdata = new FormData();
    formdata.append('name', tipo);
    formdata.append('modelo', modelo);
    formdata.append('precio', precio);
    formdata.append('link', link);
    formdata.append('image', file);
    axios({
      url: 'https://obscure-depths-14752.herokuapp.com/upload-images',
      method: 'post',
      headers: {
        authorization: ''
      },
      data: formdata
    })//.then(response => response.json())
    .then(data => {
      if(data.data === 'exito'){
       //console.log('imprimiendo la data exitosa!!!', data );
       this.setState({ tipo: '' });
       this.setState({ modelo: '' });
       this.setState({ precio: '' });
       this.setState({ link: '' });
       this.setState({ display: 'block' });
       this.setState({ message: 'block' });
      }
  })}/*
  fetch('https://obscure-depths-14752.herokuapp.com/upload-images', {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      name: 'hola'
    })
  })
  .then(response => response.json())
  .then(user => {
    if(user){
      console.log(user);
     // this.props.onRouteChange('home');
    }
  }
  )}

  CREATE TABLE content(
    id serial PRIMARY KEY,
    name VARCHAR(30),
    modelo VARCHAR(30),
    precio VARCHAR(30),
    link VARCHAR(110),
    url VARCHAR(110)
  );
  
*/

    render(){
        return(
          <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

           <main className="pa4 black-80">

             <div className="measure">

              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

              <label className="db fw6 lh-copy f6" htmlFor="email-address">Tipo de accesorio</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text"
                name="tipo"
                id="tipo"
                value={this.state.tipo}
                placeholder="tipo de accesorio"
                onChange={(e) => this.handleTipo(e)}
              />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Modelo</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text"
                name="modelo"
                id="modelo"
                value={this.state.modelo}
                placeholder="modelo"
                onChange={(e) => this.handleModelo(e)}
              />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Precio</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text"
                name="precio"
                id="precio"
                value={this.state.precio}
                placeholder="precio"
                onChange={(e) => this.handlePrecio(e)}
              />

                <label className="db fw6 lh-copy f6" htmlFor="email-address">Link</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text"
                name="link"
                id="link"
                value={this.state.link}
                placeholder="link de instagram"
                onChange={(e) => this.handleLink(e)}
              />

                <label>Sube una imagen</label>
                <input 
                type="file" 
                className="form-control bg-transparent w-100 pv3" 
                name="file"
                onChange={(e) => this.handleFile(e)}
                />
                      
                <button 
                onClick={(e) => this.onSubmitAcc(e)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pv3" 
                style={{display: this.state.display}} 
                type="button" 
                >Agregar</button>
      
                <h1 style={{display: this.state.message}}>¡Articulo agregado con Exito!</h1>

              </fieldset>

            </div>

          </main>

        </article>


        )

    }

}

export default Agregar;