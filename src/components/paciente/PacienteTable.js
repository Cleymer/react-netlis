import { responsiveFontSizes } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarPaciente } from "../../actions/PacienteAction";
//import { DataGrid } from '@mui/x-data-grid';
//import DataTable from "react-data-table-component";


const columns  = [
    { field: 'idPaciente', headerName: 'ID', width: 250 },
    { field: 'primerNombre', headerName: 'Primer Nombre', width: 250 },
    { field: 'primerApellido', headerName: 'Primer Apellido', width: 250  }
];



const PacienteTable = () => {
    
    const [tableData, setTableData] = useState([])  
    
	useEffect(()=>{
		const fetchData = async () =>{
			try {
			  const {data: response} = await listarPaciente();
			  setTableData(response);
			} catch (error) {
			  console.error(error.message);
			}
		}
		fetchData();
	}, []);
	
	function enviarParams (e, idpaciente) {

		e.preventDefault();
		window.open('/ordenpaciente?idpaciente='+idpaciente, '_parent');
	}

	function enviarParamsForm (e, idpaciente) {

		e.preventDefault();
		window.open('/ordenform?idpaciente='+idpaciente, '_parent');
	}

    return (

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Pacientes</h6>
        </div>
        <div className="card-body mb-5">
		<Link to="/paciente_form">
		<button className="btn btn-primary my-3">Nuevo Paciente</button>
		</Link>
		<table id="example1" class="table table-bordered table-striped">
               
			<thead>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Primer Nombre</th>
				  <th scope="col">Primer Apellido</th>
				  <th scope="col">Opciones</th>
				</tr>
			</thead>
			
			<tbody>
				{tableData.map((paciente)=>(
					<tr key="{paciente.idPaciente}">
					<td>{paciente.idPaciente}</td>
					<td>{paciente.primerNombre}</td>
					<td>{paciente.primerApellido}</td>
					<td>
						<a href="#" onClick={e => enviarParams(e, paciente.idPaciente)}><i className="fas fa-archive"></i></a>
						&nbsp;
						<a href="#" onClick={e => enviarParamsForm(e, paciente.idPaciente)}><i className="fas fa-archive"></i></a>
					</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Primer Nombre</th>
				  <th scope="col">Primer Apellido</th>
				  <th scope="col">Opciones</th>
				</tr>
			</tfoot>
		</table>

       
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
           
         
    );
}

export default PacienteTable;
