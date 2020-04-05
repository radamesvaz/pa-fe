import React from 'react';
import axios from 'axios';

const Tarjeta = ({ nombre, modelo, precio, url, id }) => {
   
   const onBorrar = (id) => {
    axios({
        method: 'delete',
        url: 'http://localhost:3000/delete',
        data: {
          id: id.toString()
        }
      });

    }

    return (
        <div className = 'tc bg-light-purple white dib br3 pa3 ma2 bw2 shadow-5 relative'>
            <img alt='equipos' style={{height: '200px'}} src={url}/>
            <div>
                <h2>{nombre}</h2>
                <h3>Modelo: {modelo}</h3>
                <p>Precio: {precio}</p>
                <button
                className='pointer f6 link dim ba bw2 ph3 pv2 mb2 dib dark-pink'
                onClick={() => onBorrar(id)}
                > Eliminar </button>

            </div>
        </div>
    );
}



export default Tarjeta;