import axios from "axios";

const login = async (email: string, password: string): Promise<{token: string}> => {
    let response;
    let httpClient = axios.create({
        baseURL: "http://localhost:53576"
    });
    try{
        response = httpClient.post('/users/auth', {Email: email, Password: password});
    } catch(error) {
        response = error.response;
    }
    return response.token;
}

export default login;