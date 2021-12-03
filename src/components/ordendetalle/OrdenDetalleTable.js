import { responsiveFontSizes } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ordenUnico } from "../../actions/OrdenAction";
import { listarOrdenDetallePorOrden } from "../../actions/OrdenDetalleAction";
//import { DataGrid } from '@mui/x-data-grid';
//import DataTable from "react-data-table-component";



const OrdenDetalleTable = () => {
    
    const querystring = window.location.search;
    console.log(querystring);
    const params = new URLSearchParams(querystring);

    const [tableData, setTableData] = useState([])  
    const [orden, setOrden] = useState([])

	useEffect(()=>{
		const fetchData = async () =>{
			try {
			  const {data: response} = await listarOrdenDetallePorOrden(params.get('idorden'));
			  setTableData(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchOrden = async () =>{
			try {
			  const {data: response} = await ordenUnico(params.get('idorden'));
			  setOrden(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

		fetchData();
        fetchOrden();
	}, []);
	
	/*function enviarParams (e, idorden) {

		e.preventDefault();
		window.open('/ordenpaciente?idpaciente='+idpaciente, '_parent');
	}*/

	/*const eliminarTodo = e => {
		e.preventDefault();
		tableData.splice(0, tableData.length);
		console.log(tableData);
	}*/

	/*function enviarParamsForm (e, idpaciente) {

		e.preventDefault();
		window.open('/ordenform?idpaciente='+idpaciente, '_parent');
	}*/

    return (

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden Detalle de la Orden: {orden.idOrden}</h6>
        </div>
        <div className="card-body mb-5">
		
		<table class="table table-bordered table-striped">
               
			<thead>
				<tr>
				  <th scope="col">Id Orden Detalle</th>
				  <th scope="col">Id orden</th>
                  <th scope="col">Numero Orden</th>
				  <th scope="col">Id Examen</th>
				  <th scope="col">Activo</th>
				</tr>
			</thead>
			
			<tbody>
				{tableData.map((od)=>(
					<tr key="{od.idOrdenDetalle}">
					<td>{od.idOrdenDetalle}</td>
					<td>{od.idOrden}</td>
                    <td>{od.nOrden}</td>
					<td>{od.idExamen}</td>
					<td>{od.activo}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
                    <th scope="col">Id Orden Detalle</th>
				  <th scope="col">Id orden</th>
                  <th scope="col">Numero Orden</th>
				  <th scope="col">Id Examen</th>
				  <th scope="col">Activo</th>
				</tr>
			</tfoot>
		</table>

       
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
           
         
    );
}

export default OrdenDetalleTable;
