import React from 'react';
import Tarjeta from './Tarjeta';

const ListaTarjetas = ({ accesorios }) => {

    return(
        <div className="tc">
         {
        accesorios.map((user, i) => {
        return  (
        <Tarjeta style={{marginLeft: '5px'}}
        key={i} 
        id={accesorios[i].id} 
        nombre={accesorios[i].name} 
        modelo={accesorios[i].modelo}
        precio={accesorios[i].precio}
        url={accesorios[i].url}

    
        /> 
        );
    })
         }
        </div> 
    );
}

export default ListaTarjetas;