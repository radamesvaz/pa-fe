import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn){
            return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Agregar</p>
           {/* <p onClick={() => onRouteChange('modificar')} className='f3 link dim black underline pa3 pointer'>Modificar</p> */}
            <p onClick={() => onRouteChange('eliminar')} className='f3 link dim black underline pa3 pointer'>Eliminar</p>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Cerrar sesion</p> 
        </nav>
            );
        } else {
            return(
                <h3 style={{display: 'flex', justifyContent: 'flex-end'}}>¡Bienvenido!</h3>
            )
        }

}

export default Navigation;