import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';
//import { Container, Typography } from '@mui/material';
import { listarTipoOrden } from "../../actions/TipoOrdenAction";

const columns = [
    { field: 'idTipoOrden', headerName: 'ID', width: 250 },
    { field: 'descripcion', headerName: 'Descripcion', width: 250 },
];



const TipoOrdenTable = () => {
    
    const [tableData, setTableData] = useState([])

    /*useEffect(()=>{
        fetch("https://localhost:44342/api/tipoorden")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })*/
    
	useEffect(()=>{
		const fetchData = async () =>{
			try {
			  const {data: response} = await listarTipoOrden();
			  setTableData(response);
			} catch (error) {
			  console.error(error.message);
			}
		}
		fetchData();
	}, []);
	
    return (
        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Tipo Orden</h6>
        </div>
        <div class="card-body mb-5">
		<table id="example1" class="table table-bordered table-striped">
               
			<thead>
				<tr>
				  <th scope="col">ID Tipo Orden</th>
				  <th scope="col">Descripcion</th>
				  <th scope="col">Opciones</th>
				</tr>
			</thead>
			
			<tbody>
				{tableData.map((tp)=>(
					<tr key="{tp.idTipoOrden}">
					<td>{tp.idTipoOrden}</td>
					<td>{tp.descripcion}</td>
					<td><a><i class="fas fa-edit"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a><i class="fas fa-trash"></i></a></td>
					</tr>
				))}
			</tbody>
			
			<tfoot>
				<tr>
				  <th scope="col">ID Tipo Orden</th>
				  <th scope="col">Descripcion</th>
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


export default TipoOrdenTable;
