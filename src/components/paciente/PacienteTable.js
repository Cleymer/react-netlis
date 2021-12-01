import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
//import DataTable from "react-data-table-component";

const columns  = [
    { field: 'idPaciente', headerName: 'ID', width: 250 },
    { field: 'primerNombre', headerName: 'Primer Nombre', width: 250 },
    { field: 'primerApellido', headerName: 'Primer Apellido', width: 250  }
];



const PacienteTable = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/paciente")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
	
    return (

        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Pacientes</h6>
        </div>
        <div class="card-body mb-5">

		<table class="table table-bordered">
			<thead>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Primer Nombre</th>
				  <th scope="col">Primer Apellido</th>
				  <th scope="col">Opciones</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Primer Nombre</th>
				  <th scope="col">Primer Apellido</th>
				  <th scope="col">Opciones</th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((paciente)=>(
					<tr>
					<td>{paciente.idPaciente}</td>
					<td>{paciente.primerNombre}</td>
					<td>{paciente.primerApellido}</td>
					<td><a><i class="fas fa-edit"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a><i class="fas fa-trash"></i></a></td>
					</tr>
				))}
			</tbody>
			
		</table>

       
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
           
         
    );
}

export default PacienteTable;
