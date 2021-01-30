import IDomainDTO from "./IDomainDTO";

export default interface IResolveDTO extends IDomainDTO {
    ip_address: string;
    time_to_live: number;
}