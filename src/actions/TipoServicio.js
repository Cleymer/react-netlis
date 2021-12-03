import HttpClient from '../services/HtttpClient';

export const listarTipoServicio = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tiposervicio').then(response =>{
            resolve(response);
        })
    })
}