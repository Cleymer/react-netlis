import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
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

        <div class="container mt-5" style={{ height: 400, width: '100%' }}>
            <DataGrid
				getRowId={(r)=>r.idPaciente}
                rows={tableData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default PacienteTable;
