import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';
//import { Container, Typography } from '@mui/material';
import { listarTipoOrden, eliminarTipoOrden } from "../../actions/TipoOrdenAction";
import { Link, NavLink } from 'react-router-dom'


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
	

	function deleteTP (e, idTipoOrden) {
		e.preventDefault();

		eliminarTipoOrden(idTipoOrden).then(function response(){
			alert("Eliminado con éxito");
			window.open("/tipoorden", "_parent");
		})
		.catch(error=>{console.log(error.message)});



	}


    return (
        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Tipo Orden</h6>
        </div>
        <div class="card-body mb-5">
		<Link to="/tipoordenform">
		<button className="btn btn-primary my-3">Nuevo Tipo Orden</button>
		</Link>
		<table class="table table-bordered table-striped">
               
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
					<td><a href="#" onClick={e => deleteTP(e, tp.idTipoOrden)}><i class="fas fa-trash"></i></a></td>
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
