import { useState } from "react";
import DataSucursales from "./DataSucursales";
import Boton from "../Boton/Boton";
import './Sucursales.css'

const Sucursales = () => {
    const [mostrarImagen, setMostrarImagen] = useState(true);/* originariamente a la vista */

    const handlerToggleDiv = () => {
        setMostrarImagen(!mostrarImagen);
    };

  
  
    return (
    <>
     <h2>Locales</h2>


{DataSucursales.map((data) => (

    <div key={data.id}>
        <div >
            <h2>{data.nombre}</h2>
            <p>{data.direccion}</p>

            <Boton texto="DESCRIPCION" onClick={handlerToggleDiv}>{mostrarImagen ? 'Mostrar texto' : 'Mostrar imagen'}</Boton>

            {mostrarImagen ? (
                <img className="imgSucursales"src={data.imagen} alt={data.nombre} style={{ display: mostrarImagen ? 'block' : 'none' }  }    />
            ) : (
                <p  >{data.descripcion}</p>
            )
            }

            <Boton color="#dfdfdf" texto="MAPA" onClick={handlerToggleDiv} />

            
        </div>

    </div>
))}

    </>
  )
}

export default Sucursales