import whois from 'whois-json';
import IWhoisProvider from '../interfaces/IWhoisProvider';
import IWhoisProviderKeyableDTO from '../interfaces/dtos/IWhoisProviderKeyableDTO';
import IDomainDTO from '../interfaces/dtos/IDomainDTO';
import IFormatterDTO from '../interfaces/dtos/IFormatterDTO';

export default class WhoisProvider implements IWhoisProvider {
    public async get({ name }: IDomainDTO): Promise<IWhoisProviderKeyableDTO> {
        return whois(name);
    }

    public async informationFilter(
        { whoisComplete }: IWhoisProviderKeyableDTO
    ): Promise<IFormatterDTO> {
        return {
            whois: JSON.stringify(whoisComplete),
            web_hosting: whoisComplete.registrationServiceProvidedBy,
        }
    }
}