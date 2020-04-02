import React, { Component } from 'react';
import axios from 'axios';

class Agregar extends Component {


  state = {
    tipo: '',
    modelo: '',
    precio: '',
    file: null

  }

  handleTipo(e){
    let tipo = e.target.value;
    this.setState({ tipo: tipo })
  }

  handleModelo(e){
    let modelo = e.target.value;
    this.setState({ modelo: modelo });
  }

  handlePrecio(e){
    let precio = e.target.value;
    this.setState({ precio: precio })
  }

  handleFile(e){
    let file = e.target.files[0];
    this.setState({ file: file})
  }

  onSubmitAcc = (e) => {
    let tipo = this.state.tipo;
    let modelo = this.state.modelo;
    let precio = this.state.precio;
    let file = this.state.file;

    let formdata = new FormData();

    formdata.append('tipo', tipo);
    formdata.append('modelo', modelo);
    formdata.append('precio', precio)
    formdata.append('image', file);

    axios({
      url: 'http://localhost:3000/upload-images',
      method: 'post',
      headers: {
        authorization: ''
      },
      data: formdata
    })/*.then(response => response.json())
    .then(user => {
      if(user){
        console.log(user);
      }
    })
  */
  }

    render(){
        return(
          <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text"
          name="tipo"
          id="tipo"
          placeholder="tipo de accesorio"
          onChange={(e) => this.handleTipo(e)}
        />
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text"
          name="modelo"
          id="modelo"
          placeholder="modelo"
          onChange={(e) => this.handleModelo(e)}
        />
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text"
          name="precio"
          id="precio"
          placeholder="precio"
          onChange={(e) => this.handlePrecio(e)}
        />
            <div className="container">
            
            <div className="row">
              <div className="offset-md-3 col-md-6">
                 <div className="form-group files">
                  <label>Sube una imagen</label>
                  <input type="file" 
                  className="form-control" 
                  name="file"
                  onChange={(e) => this.handleFile(e)}
                 // multiple onChange={this.onChangeHandler}
    
                  />
                </div>  
                

                <button 
                onClick={(e) => this.onSubmitAcc(e)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="button" 
                >Agregar</button>
                
    
            </div>
        </div>
        </div>
        </article>
        )

    }

}

export default Agregar;