import axios from "axios";

const register = async (email: string, password: string, CPF: string, RG: string, city: string, street: string, number: string, state: string, name: string): Promise<void> => {
    let httpClient = axios.create({
        baseURL: "http://localhost:5001"
    });
    await httpClient.post('/users/register', {email, password, CPF, RG, city, street, number, state, name});
}

export default register;