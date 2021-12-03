import HttpClient from '../services/HtttpClient';

export const listarExamen = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/examen').then(response =>{
            resolve(response);
        })
    })
}