import IDomainDTO from "./dtos/IDomainDTO";
import IResolveDTO from "./dtos/IResolveDTO";

export default interface IDNSProvider {
    resolve({ name }: IDomainDTO): Promise<IResolveDTO>;
}