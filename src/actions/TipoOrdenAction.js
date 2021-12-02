import HttpClient from '../services/HtttpClient';

export const listarTipoOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tipoorden').then(response =>{
            resolve(response);
        })
    })
}

export const registrarTipoOrden = TipoOrden => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/tipoorden', TipoOrden).then(response =>{
            resolve(response);
        })
    })
}