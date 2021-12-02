import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarMedico } from '../../actions/MedicoAction';
import { registrarOrden } from '../../actions/OrdenAction';
// { useHistory } from "react-router-dom";


export const OrdenForm = () => {


    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const [medico, setMedico] = useState([]);

    const [orden, setOrden] = useState({
        nOrden: '',
        idTblMedico: '',
        idPaciente: params.get("idpaciente"),
        idTipoServicio: '',
        idTipoOrden: '',
        asistencia: '',
        observaciones: '',
        fechaOrden: '',
        estado: '',
        fechaPreporte: ''
    });

    useEffect(()=>{
		const fetchData = async () =>{
			try {
			  const {data: response} = await listarMedico();
			  setMedico(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}
		fetchData();
	}, []);

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setOrden( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const idMedico = e =>{
        const {value} = e.target;
        setOrden({...orden, idtblMedico: value});
    }

    const registrarTipoOrdenBoton = e => {
        

        e.preventDefault();
        
        /*registrarOrden(orden)
            .then(response => console.log('Se registró usuario con éxito ', response));*/

        console.log(orden);
        //window.open('/paciente?msj=1', '_parent');
        /*
        registrarTipoOrden(tipoOrden).then(response => console.log('Se registró usuario con éxito ', response));
        //navigate(`/tipoorden`);
        window.open('/tipoorden?msj='+tipoOrden.descripcion, '_parent')*/
    }

    return ( 

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden</h6>
        </div>
        <div className="card-body mb-5">

       <form className="row container">
 

           <label className="card-text">Número de Orden: </label> 
           <input name="nOrden" onChange={ingresarValores} value={orden.nOrden} className="form-control mb-3 " type="text"/>
           
           <label className="card-text">Médico</label>       
            <select value={orden.idTblMedico} name="idTblMedico" className="form-control" onChange={
                (e) => {
                    const orden1 = e.target.value;
                    setOrden({...orden, idTblMedico: 'dd'})
                }
            } >
                {medico.map((m)=>(
                    <option key={m.idTblMedico} value={m.idTblMedico}>
                        {m.nombres} {m.apellidos}
                    </option>
                ))}   
            </select>
            {orden.idtblMedico}
            <label className="card-text">Paciente: </label> 
            <input name="idPaciente" value={params.get('idpaciente')} className="form-control mb-3 " type="text"/>
           
                 
             

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