import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarTipoOrden } from '../../actions/TipoOrdenAction';
// { useHistory } from "react-router-dom";


export const TipoOrdenForm = () => {

    let navigate = useNavigate();
	
    const [tipoOrden, setTipoOrden] = useState({
        descripcion: '',
    });

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setTipoOrden( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const registrarTipoOrdenBoton = e => {
        e.preventDefault();
        registrarTipoOrden(tipoOrden)
            .then(response => console.log('Se registró usuario con éxito ', response));
        window.open('/tipoorden?msj=1', '_parent');
        /*
        registrarTipoOrden(tipoOrden).then(response => console.log('Se registró usuario con éxito ', response));
        //navigate(`/tipoorden`);
        window.open('/tipoorden?msj='+tipoOrden.descripcion, '_parent')*/
    }

    return ( 

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Tipo Orden</h6>
        </div>
        <div className="card-body mb-5">

       <form className="row container">

           <label className="card-text">Descripción: </label> 
           <input name="descripcion" onChange={ingresarValores} value={tipoOrden.descripcion} className="form-control " type="text"/>
           
            <div className="mb-3">
                <button className="btn btn-primary my-3" type="submit" onClick={registrarTipoOrdenBoton} >Guardar</button>
            </div>
       </form>
            
        </div>
        <div className="card-footer"></div>
    </div>
    </div>
 
    )
}