import axios, { AxiosInstance } from 'axios';

export default class HttpClientSingleton {
    private static instance: HttpClientSingleton;
    private http: AxiosInstance;

    private constructor() {
        this.http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL_API_UMBLER_CHALLENGE
        });
    }

    public static getInstance(): HttpClientSingleton {
        if (HttpClientSingleton.instance === undefined) {
            HttpClientSingleton.instance = new HttpClientSingleton();
        }
        return HttpClientSingleton.instance;
    }

    public getClient (): AxiosInstance {
        return this.http;
    }
}