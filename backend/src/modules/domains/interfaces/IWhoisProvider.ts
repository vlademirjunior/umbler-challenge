import IDomainDTO from "./dtos/IDomainDTO";
import IFormatterDTO from "./dtos/IFormatterDTO";
import IWhoisProviderKeyableDTO from "./dtos/IWhoisProviderKeyableDTO";

export default interface IWhoisProvider {
    get({ name }: IDomainDTO): Promise<IWhoisProviderKeyableDTO>;
    informationFilter({ whoisComplete }: IWhoisProviderKeyableDTO): Promise<IFormatterDTO>;
}