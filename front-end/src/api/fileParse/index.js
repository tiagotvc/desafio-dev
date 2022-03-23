import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:3001',
});

export function fileDataParse(file) {
    const formData = new FormData();
    formData.append("file", file);
    const data = instance.post('/api/fileParse', formData)
    return data;
}

export async function getTest() {
    const getting = instance.get('/api/loadParsedData');
    return getting;
}