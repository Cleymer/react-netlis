import HttpClient from '../services/HtttpClient';

export const listarOrdenPaciente = (paciente) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/orden/paciente/'+paciente).then(response =>{
            resolve(response);
        })
    })
}

export const listarOrdenPorTipo = (tipoOrden) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/orden/tipoorden/'+tipoOrden).then(response =>{
            resolve(response);
        })
    })
}

export const registrarOrden = Orden => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/orden', Orden).then(response =>{
            resolve(response);
        })
    })
}

export const listarOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/orden').then(response =>{
            resolve(response);
        })
    })
}

export const ordenUnico = (orden) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/orden/'+orden).then(response =>{
            resolve(response);
        })
    })
}