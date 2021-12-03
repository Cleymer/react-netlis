import HttpClient from '../services/HtttpClient';

export const listarTipoServicio = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tiposervicio').then(response =>{
            resolve(response);
        })
    })
}

export const servicioUnico = (id) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tiposervicio/'+id).then(response =>{
            resolve(response);
        })
    })
}