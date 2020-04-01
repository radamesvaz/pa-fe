import React, { Component } from 'react';
import axios from 'axios';

class Agregar extends Component {


  state = {

    file: null

  }

  handleFile(e){

    let file = e.target.files[0];

    this.setState({ file: file})

  }

  onSubmitAcc = (e) => {

    let file = this.state.file;

    let formdata = new FormData();

    formdata.append("image", file);

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
        )
    }

}

export default Agregar;