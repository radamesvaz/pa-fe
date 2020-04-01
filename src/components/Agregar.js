import React, { Component } from 'react';

class Agregar extends Component {

    render(){
        return(
            <div class="container">
            <div class="row">
              <div class="offset-md-3 col-md-6">
                 <div class="form-group files">
                  <label>Sube una imagen</label>
                  <input type="file" 
                  class="form-control" 
                 // multiple onChange={this.onChangeHandler}
    
                  />
                </div>  
               {/* <div class="form-group">
                <ToastContainer />
                <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
         
                </div> */}
                
              {/*  <button type="button" 
                class="btn btn-success btn-block" 
                onClick={this.onClickHandler}
                >Upload</button> */}
    
                
    
            </div>
        </div>
        </div>
        )
    }

}

export default Agregar;