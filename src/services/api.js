///Temporariamente desabilitado devido a implementação do firebase

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001'
});

export { api }