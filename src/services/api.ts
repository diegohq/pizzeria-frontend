import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupApiClient(context = undefined) {

    let cookies = parseCookies(context);

    const api = axios.create({
        baseUrl: 'http://localhost:3000',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response.status == 401) {
            if(typeof window !== undefined) {
                signOut();
                return;
            }
            
            return Promise.reject(new AuthTokenError());
        }

        return Promise.reject(error);
    });


    return api;

}