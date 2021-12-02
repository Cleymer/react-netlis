import HttpClient from '../services/HtttpClient';

export const listarPaciente = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/paciente').then(response =>{
            resolve(response);
        })
    })
}

export const pacienteUnico = (idPaciente) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/paciente/'+idPaciente).then(response =>{
            resolve(response);
        })
    })
}