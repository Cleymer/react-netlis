import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';

const columns = [
    { field: 'idTipoOrden', headerName: 'ID', width: 250 },
    { field: 'descripcion', headerName: 'Descripcion', width: 250 },
];



const TipoOrdenTable = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/tipoorden")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
	
    return (
        
        <Container fixed>
            <Typography my={5} component="h1" variant="h5" style={{textAlign:"center"}}>
            Tabla Tipo Orden
            </Typography>
            <DataGrid
				getRowId={(r)=>r.idTipoOrden}
                rows={tableData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Container>
        
    );
}


export default TipoOrdenTable;
