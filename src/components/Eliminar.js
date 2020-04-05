import React, { useState, useEffect } from 'react';
import ListaTarjetas from './ListaTarjetas';



function Eliminar (){
    const [equipo, setState] = useState(
        {
          accesorios: [],
          searchField: ""
        }
      );
    
      useEffect(() => {
        // code to run on component mount
        fetch('http://localhost:3000/home')
        .then(response=> response.json())
        .then(users => {setState({...equipo, accesorios: users })})
      }, []);
  


        return(
            <div>
                <ListaTarjetas accesorios={equipo.accesorios} />
                
            </div>
        )
    

}

export default Eliminar