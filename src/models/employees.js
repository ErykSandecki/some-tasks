import axios from '../core/interceptor';

export async function fetchEmployess() {
    return await axios.get(`/employees`);
}

export async function fetchEmployer(id) {
    return await axios.get(`/employee/${id}`);
}

export async function createEmployer(employer) {
    return await axios.post(`/create`, employer);
}

export async function editEmployer(employer, id) {
    return await axios.put(`/update/${id}`, employer);
}

export async function deleteEmployer(id) {
    return await axios.delete(`/delete/${id}`);
}
