import HttpClient from '../services/HtttpClient';

export const listarOrdenPaciente = (paciente) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/orden/paciente/'+paciente).then(response =>{
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