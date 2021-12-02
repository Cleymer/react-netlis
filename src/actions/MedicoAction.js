import HttpClient from '../services/HtttpClient';

export const listarMedico = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/medico').then(response =>{
            resolve(response);
        })
    })
}