import { useState, useEffect } from "react";
import { listarExamen } from "../../actions/ExamenAction";
import { ordenUnico } from "../../actions/OrdenAction";
import { registrarOrdenDetalle } from "../../actions/OrdenDetalleAction";

export const OrdenDetalleForm = () => {

    const querystring = window.location.search;
    console.log(querystring);
    
    const params = new URLSearchParams(querystring);
    const [examen, setExamen] = useState([]);

    const [ordenDetalle, setOrdenDetalle] = useState({
        idOrden: params.get('idorden'),
        nOrden: params.get('norden'),
        idExamen: '',
    });

    useEffect(() => {
        const fetchDataExamen = async () =>{
			try {
			  const {data: response} = await listarExamen();
			  setExamen(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}
        fetchDataExamen();
    }, [])

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setOrdenDetalle( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const registrarTipoOrdenBoton = e => {
        

        e.preventDefault();
        
        registrarOrdenDetalle(ordenDetalle)
            .then(response => alert('Se registró orden con éxito ', response))
            .catch(error=>{alert("no se")});

        console.log(ordenDetalle);
        //window.open('/paciente?msj=1', '_parent');
        
    }

    return(
        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orden Detalle</h6>
        </div>
        <div className="card-body mb-5">

        <form className="row container">

            <label className="card-text">Id de Orden: </label> 
            <input name="idOrden" onChange={ingresarValores} value={ordenDetalle.idOrden} className="form-control mb-3 " type="text" readOnly/>

            <label className="card-text">Número de Orden: </label> 
            <input name="nOrden" onChange={ingresarValores} value={ordenDetalle.nOrden} className="form-control mb-3 " type="text" readOnly/>

            <label className="card-text">Examenes: </label>       
            <select name="idExamen" className="form-control" onClick={ingresarValores}>
                {examen.map((m)=>(
                    <option key={m.idExamen} value={m.idExamen}>
                        {m.descripcionCorta}
                    </option>
                ))}   
            </select>
            
            <div className="mb-3">
                <button className="btn btn-primary my-3" type="submit" onClick={registrarTipoOrdenBoton} >Guardar</button>
            </div>

        </form>
            
        </div>
        <div className="card-footer"></div>
        </div>
        </div>
    );

}