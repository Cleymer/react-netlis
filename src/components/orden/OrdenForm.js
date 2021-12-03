import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarMedico } from '../../actions/MedicoAction';
import { registrarOrden } from '../../actions/OrdenAction';
import { listarTipoOrden } from '../../actions/TipoOrdenAction';
import { listarTipoServicio } from '../../actions/TipoServicio';
// { useHistory } from "react-router-dom";


export const OrdenForm = () => {


    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const [medico, setMedico] = useState([]);
	const [servicio, setServicio] = useState([]);
    const [tipoOrden, setTipoOrden] = useState([]);

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    

    const [orden, setOrden] = useState({
        nOrden: '',
        idTblMedico: '',
        idPaciente: params.get("idpaciente"),
        idTipoServicio: '',
        idTipoOrden: '',
        asistencia: '',
        observaciones: '',
        estado: 1,
    });

    useEffect(()=>{
		
        const fetchDataMedico = async () =>{
			try {
			  const {data: response} = await listarMedico();
			  setMedico(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchDataServicio = async () =>{
			try {
			  const {data: response} = await listarTipoServicio();
			  setServicio(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchDataTipoOrden = async () =>{
			try {
			  const {data: response} = await listarTipoOrden();
			  setTipoOrden(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

		fetchDataMedico();
        fetchDataServicio();
        fetchDataTipoOrden();
	}, []);

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setOrden( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const registrarTipoOrdenBoton = e => {
        

        e.preventDefault();
        
        registrarOrden(orden)
            .then(response => console.log('Se registró orden con éxito ', response));

        console.log(orden);
        window.open('/paciente?msj=1', '_parent');
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
            <select name="idTblMedico" className="form-control" onClick={ingresarValores}>
                {medico.map((m)=>(
                    <option key={m.idTblMedico} value={m.idTblMedico}>
                        {m.nombres} {m.apellidos}
                    </option>
                ))}   
            </select>
            <label className="card-text mt-3">Paciente: </label> 
            <input name="idPaciente" value={params.get('idpaciente')} className="form-control mb-3 " type="text" readonly/>
           
            <label className="card-text">Servicio</label>       
            <select name="idTipoServicio" className="form-control" onClick={ingresarValores}>
                {servicio.map((m)=>(
                    <option key={m.idTipoServicio} value={m.idTipoServicio}>
                        {m.descripcion}
                    </option>
                ))}   
            </select>

            <label className="card-text mt-3">Tipo Orden</label>       
            <select name="idTipoOrden" className="form-control" onClick={ingresarValores}>
                {tipoOrden.map((m)=>(
                    <option key={m.idTipoOrden} value={m.idTipoOrden}>
                        {m.descripcion}
                    </option>
                ))}   
            </select>   
             
            <label className="card-text mt-3">Asistencia: </label> 
            <input name="asistencia" onChange={ingresarValores} value={orden.asistencia} className="form-control mb-3 " type="text"/>
           
            <label className="card-text">Observaciones: </label> 
            <input name="observaciones" onChange={ingresarValores} value={orden.observaciones} className="form-control mb-3 " type="text"/>
           

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