import { AxiosInstance, AxiosResponse } from "axios";
import CBackendApi from "../contracts/CDomainResource";
import HttpClientSingleton from '../clients/HttpClientSingleton';
import CDomainDTO from "../contracts/dtos/CDomainDTO";

export default class DomainResource implements CBackendApi {
    private client: AxiosInstance;
    private resource: string;

    constructor() {
        this.client = HttpClientSingleton.getInstance().getClient();
        this.resource = '/domains';
    }

    public async getByName({ name }: CDomainDTO): Promise<AxiosResponse> {
        return this.client.get(`${this.resource}/${name}`);
    }
}