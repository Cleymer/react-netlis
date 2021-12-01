import HttpClient from '../services/HtttpClient';

export const listarTipoOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tipoorden').then(response =>{
            resolve(response);
        })
    })
}