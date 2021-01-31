import { injectable, inject } from 'tsyringe';
import { differenceInSeconds } from 'date-fns';
import IDomainsRepository from '../interfaces/IDomainsRepository';
import IWhoisProvider from '../interfaces/IWhoisProvider';
import IDNSProvider from '../interfaces/IDNSProvider';
import IDomainDTO from '../interfaces/dtos/IDomainDTO';
import IViewDomainDTO from '../interfaces/dtos/IViewDomainDTO';
import Domain from '../entities/Domain';

@injectable()
export default class ShowDomainService {
  constructor(
    @inject('DomainsRepository')
    private domainsRepository: IDomainsRepository,

    @inject('WhoisProvider')
    private whoisProvider: IWhoisProvider,

    @inject('DNSProvider')
    private dnsProvider: IDNSProvider,
  ) { }

  public async execute({ name }: IDomainDTO): Promise<IViewDomainDTO> {
    const domain = await this.domainsRepository.findByName(name);
    if (domain === undefined) {
      return this.saveDomainInformation({ name });
    }
    const secondsPassed = differenceInSeconds(new Date, domain.updated_at);
    const checkTtlExpired = secondsPassed > domain.time_to_live;
    if (checkTtlExpired) {
      return this.updateDomainInformation(name, domain);
    }
    return this.getDomainInformationFromCache(domain);
  }

  private async saveDomainInformation({ name }: IDomainDTO): Promise<IViewDomainDTO> {
    const whoisComplete = await this.whoisProvider.get({ name });
    const informationFiltered = await this.whoisProvider.informationFilter({ whoisComplete });
    const { ip_address, time_to_live } = await this.dnsProvider.resolve({ name });
    const { web_hosting, whois } = informationFiltered;
    await this.domainsRepository.store({
      name, ip_address, time_to_live, web_hosting, whois
    });
    return { name, whois, web_hosting: web_hosting || null, ip_address };
  }

  private async updateDomainInformation(name: string, domain: Domain): Promise<IViewDomainDTO> {
    const whoisComplete = await this.whoisProvider.get({ name });
    const informationFiltered = await this.whoisProvider.informationFilter({ whoisComplete });
    const { ip_address, time_to_live } = await this.dnsProvider.resolve({ name });
    const { web_hosting, whois } = informationFiltered;
    Object.assign(domain, { name, ip_address, whois, web_hosting, time_to_live });
    await this.domainsRepository.save(domain);
    return { name, whois, web_hosting: web_hosting || null, ip_address };
  }

  private getDomainInformationFromCache(domain: Domain): IViewDomainDTO {
    return {
      name: domain.name,
      whois: domain.whois,
      web_hosting: domain.web_hosting,
      ip_address: domain.ip_address
    };
  }
}
