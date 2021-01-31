import { AxiosResponse } from "axios";
import CDomainDTO from "./dtos/CDomainDTO";

export default interface CDomainResource {
    getByName(name: CDomainDTO): Promise<AxiosResponse>;
}