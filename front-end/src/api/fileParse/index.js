import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:3003',
});

export function filaDataParse(file) {
    const formData = new FormData();
    formData.append("file", file);

    const data = instance.post('/api/fileParse', formData);
    return data;
}