import React, {useState, useEffect} from "react";
import { useBarcode } from 'react-barcodes';
import { ordenUnico } from "../../actions/OrdenAction";
import { medicoUnico } from "../../actions/MedicoAction";
import { pacienteUnico } from "../../actions/PacienteAction";
import { tpUnico } from "../../actions/TipoOrdenAction";
import { listarOrdenDetallePorOrden } from "../../actions/OrdenDetalleAction";
import { servicioUnico } from "../../actions/TipoServicio";

const GenerarOrden = () => {

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const [orden, setOrden] = useState([]);
    const [medico, setMedico] = useState([]);
    const [paciente, setPaciente] = useState([]);
    const [ordenDetalle, setOrdenDetalle] = useState([]);
    const [servicio, setServicio] = useState([]);
    const [tipoOrden, setTipoOrden] = useState([]);

    const { inputRef } = useBarcode({
        value: params.get('norden'),
        options: {
          background: '#ffff',
        }
    });

    useEffect(() => {
        
        //var idmedico;

        const fetchOrden = async () =>{
			try {
			  const {data: response} = await ordenUnico(params.get('idorden'));
			  
              console.log(response.idTipoOrden);
              fetchMedico(response.idtblMedico);
              fetchPaciente(response.idPaciente);
              fetchTipoOrden(response.idTipoOrden);
              fetchOrdenDetalle(response.idOrden);
              fetchServicio(response.idTipoServicio);
			  setOrden(response);
              

			} catch (error) {
			  console.error(error.message);
			}
		}
        fetchOrden();
        console.log(orden);

        const fetchMedico = async (idmedico) =>{
			try {
			  const {data: response} = await medicoUnico(idmedico);
			  
			  setMedico(response);
              
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchPaciente = async (idpaciente) =>{
			try {
			  const {data: response} = await pacienteUnico(idpaciente);
			  
			  setPaciente(response);
              
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchTipoOrden = async (idtp) =>{
			try {
			  const {data: response} = await tpUnico(idtp);
			  
			  setTipoOrden(response);
              
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchServicio = async (idS) =>{
			try {
			  const {data: response} = await servicioUnico(idS);
			  
			  setServicio(response);
              
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchOrdenDetalle = async (id) =>{
			try {
			  const {data: response} = await listarOrdenDetallePorOrden(id);
			  setOrdenDetalle(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

    }, [])


    return(

        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden</h6>
        </div>
        <div className="card-body mb-5">
            <label className="card-text my-3">ID Orden: {params.get('idorden')}</label>
            <br></br>
            <label className="card-text my-3">Número Orden: {orden.nOrden}</label>
            <br></br>
            <label className="card-text my-3">Tipo Orden: {tipoOrden.descripcion}</label>
            <br></br>
            <label className="card-text my-3">Tipo Servicio: {servicio.descripcion}</label>
            <br></br>
            <label className="card-text my-3">Asistencia: {orden.asistencia}</label><br></br> 
            <label className="card-text my-3">Observaciones: {orden.observaciones}</label><br></br>
            <label className="card-text my-3">Fecha Orden: {orden.fechaOrden}</label> <br></br>
            <img ref={inputRef} />

        </div>
        <div className="card-footer"></div>
        </div>


        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Paciente</h6>
        </div>
        <div className="card-body mb-5">
            <label className="card-text my-3">ID medico: {paciente.idPaciente}</label>
            <br></br>
            <label className="card-text my-3">Nombres: {paciente.primerNombre+' '+paciente.segundoNombre}</label>
            <br></br>
            <label className="card-text my-3">Apellidos: {paciente.primerApellido+' '+paciente.segundoApellido}</label>
            <br></br>
            <label className="card-text my-3">Numero Identificación: {paciente.numIdentificacion}</label>
            <br></br>
        </div>
        <div className="card-footer"></div>
        </div>

        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Médico</h6>
        </div>
        <div className="card-body mb-5">
            <label className="card-text my-3">ID medico: {medico.idTblMedico}</label>
            <br></br>
            <label className="card-text my-3">Nombres: {medico.nombres}</label>
            <br></br>
            <label className="card-text my-3">Apellidos: {medico.apellidos}</label>
            <br></br>
            <label className="card-text my-3">Fecha Nacimiento: {medico.fechaNac}</label>
            <br></br>
        </div>
        <div className="card-footer"></div>
        </div>

        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden detalles</h6>
        </div>

        <div className="card-body mb-5">

            <ul class="list-group">
            {ordenDetalle.map((od)=>(
                <li class="list-group-item">
                    <label className="card-text my-3">Número Orden: {od.nOrden}</label>
                    <br></br>
                    <label className="card-text my-3">ID Examen: {od.idExamen}</label>
                </li>
            ))}
            </ul>
        </div>
        <div className="card-footer"></div>
        </div>

        </div>

    );

}

export default GenerarOrden;