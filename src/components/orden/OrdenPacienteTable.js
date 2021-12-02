import { responsiveFontSizes } from "@mui/material";
import React, { useEffect, useState } from "react";
import { listarOrdenPaciente } from "../../actions/OrdenAction";
import { pacienteUnico } from "../../actions/PacienteAction";

//import { DataGrid } from '@mui/x-data-grid';
//import DataTable from "react-data-table-component";



const OrdenPacienteTable = () => {
    
    const querystring = window.location.search;
    console.log(querystring);
    const params = new URLSearchParams(querystring); 
    
	const [tableData, setTableData] = useState([])  
    const [paciente, setPaciente] = useState([])

	useEffect(()=>{
		const fetchData = async () =>{
			try {
			  const {data: response} = await listarOrdenPaciente(params.get('idpaciente'));
			  
			  setTableData(response);
              
			} catch (error) {
			  console.error(error.message);
			}
		}

		const fetchPaciente = async () =>{
			try {
				const { data: response } = await pacienteUnico(params.get('idpaciente'));
			  	setPaciente(response);
				console.log(response);
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchData();
		fetchPaciente();
	}, []);
	
    return (

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden Paciente del {paciente.primerNombre} {paciente.primerApellido}</h6>
        </div>
        <div className="card-body mb-5">
		
		<table class="table table-responsive table-bordered table-striped">
               
			<thead>
				<tr>
				  <th scope="col">Id Orden</th>
				  <th scope="col">Número de Orden</th>
				  <th scope="col">Id Paciente</th>
				  <th scope="col">Id Médico</th>
				  <th scope="col">Id Tipo Servicio</th>
				  <th scope="col">Id Tipo Orden</th>
				  <th scope="col">Asistencia</th>
				  <th scope="col">Observaciones</th>
				  <th scope="col">Fecha Orden</th>
				  <th> Acciones</th>
				</tr>
			</thead>
			
			<tbody>
				{tableData.map((paciente)=>(
					<tr key="{paciente.idPaciente}">
					<td>{paciente.idOrden}</td>
					<td>{paciente.nOrden}</td>
					<td>{paciente.idtblMedico}</td>
					<td>{paciente.idPaciente}</td>
					<td>{paciente.idTipoServicio}</td>
					<td>{paciente.idTipoOrden}</td>
					<td>{paciente.asistencia}</td>
					<td>{paciente.observaciones}</td>
					<td>{paciente.fechaOrden}</td>
					<td><a><i className="fas fa-edit"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a><i className="fas fa-trash"></i></a></td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
				<th scope="col">Id Orden</th>
				  <th scope="col">Número de Orden</th>
				  <th scope="col">Id Paciente</th>
				  <th scope="col">Id Médico</th>
				  <th scope="col">Id Tipo Servicio</th>
				  <th scope="col">Id Tipo Orden</th>
				  <th scope="col">Asistencia</th>
				  <th scope="col">Observaciones</th>
				  <th scope="col">Fecha Orden</th>
				  <th> Acciones</th>
				</tr>
			</tfoot>
		</table>

       
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
           
         
    );
}

export default OrdenPacienteTable;
