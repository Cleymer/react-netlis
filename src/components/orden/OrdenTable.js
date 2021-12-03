//import { listarTipoOrden } from "../../actions/TipoOrdenAction";

const { Component } = require("react");
const { listarOrden, listarOrdenPorTipo } = require("../../actions/OrdenAction");
const { listarTipoOrden } = require("../../actions/TipoOrdenAction");

class OrdenTable extends Component {
    
    state={
        data:[],
        tipoOrden:[],
    }

    

    obtenerOrden=()=>{
        listarOrden().then(response => {
            this.setState({data: response.data});
        }).catch(error=>{console.log(error.message)})

        listarTipoOrden().then(response => {
            this.setState({tipoOrden: response.data});
        }).catch(error=>{console.log(error.message)})
    }

    

    fillByTipoOrden= async e =>{
        e.persist();
        const arr = this.state.data.splice(0, this.state.data);
        this.setState({data: arr});

        await listarOrdenPorTipo(e.target.value).then(response => {
            this.setState({data: response.data});
        }).catch(error=>{console.log(error.message)});


    }

    componentDidMount(){
        this.obtenerOrden();
    }

    render(){
        return(
            <div className="container mt-5  ">
                <div className="card shadow mb-4  ">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ordenes</h6>
                </div>   
                
                <div className="card-body mb-5">
                
                <div className="container my-3">
                <h6 className="m-0 font-weight-bold text-primary">Filtrar por tipo de ordenes</h6>
                </div>
                
                <div className="container-sm my-3">
                <label className="card-text mt-3">Tipo Orden</label>       
                <select name="idTipoOrden" className="form-control" onClick={this.fillByTipoOrden}>
                {this.state.tipoOrden.map((m)=>(
                    <option key={m.idTipoOrden} value={m.idTipoOrden}>
                        {m.descripcion}
                    </option>
                ))}   
                </select>
                </div>

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
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.state.data.map((paciente)=>(
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
                        </tr>
                    </tfoot>
                </table>
                
                
                    
                </div>
                <div class="card-footer"></div>
            </div>
            </div>
        );
    }

}

export default OrdenTable;