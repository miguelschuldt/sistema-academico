import axios from "axios";

const login = async (email: string, password: string): Promise<{token: string, userName: string}> => {
    let response;
    let httpClient = axios.create({
        baseURL: "http://localhost:53576"
    });
    try{
        response = await httpClient.post('/users/auth', {Email: email, Password: password});
    } catch(error) {
        response = error.response;
    }
    return {token: response.data.token, userName: response.data.data[0].Name};
}

export default login;