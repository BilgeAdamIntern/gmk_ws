import axios from "axios";

export const getEmployees = (page = 0, size = 5) => {
    return axios.get(`/api/employee?page=${page}&size=${size}`);
};

export const insertEmployees = (body, closeModal) => {
    console.log(body)
    return axios.post(`/api/saveEmployee/`, body)
        .then(() => {
            closeModal();
        })
};

export const getFirstName = firstName => {
    return axios.get(`/api/employee/${firstName}`);
};

export const updateEmployee = (firstName, body) => {
    return axios.put(`/api/employees/${firstName}`, body);
};

export const deleteEmployee = firstName => {
    return axios.delete(`/api/employees/${firstName}`);
};

export const getSecondName = secondName => {
    return axios.get(`/api/employees/${secondName}`);
};

export const getPhoneNumber = phoneNumber => {
    return axios.get(`/api/employees/${phoneNumber}`);
};

export const getDepartment = department => {
    return axios.get(`/api/employees/${department}`);
};

export const getDuty = duty => {
    return axios.get(`/api/employees/${duty}`);
};

export const getID = id => {
    return axios.get(`/api/employees/${id}`);
};

export const getAge = age => {
    return axios.get(`/api/employees/${age}`);
};