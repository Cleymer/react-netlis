import HttpClient from '../services/HtttpClient';

export const listarOrdenDetallePorOrden = (orden) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/ordendetalle/orden/'+orden).then(response =>{
            resolve(response);
        })
    })
}

export const ordenDetalle= (ordenDetalle) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/ordendetalle'+ordenDetalle).then(response =>{
            resolve(response);
        })
    })
}

export const registrarOrdenDetalle = OrdenDetalle => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/ordendetalle', OrdenDetalle).then(response =>{
            resolve(response);
        })
    })
}

export const listarOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/ordendetalle').then(response =>{
            resolve(response);
        })
    })
}