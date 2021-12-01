import HttpClient from '../services/HtttpClient';

export const listarPaciente = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/paciente').then(response =>{
            resolve(response);
        })
    })
}