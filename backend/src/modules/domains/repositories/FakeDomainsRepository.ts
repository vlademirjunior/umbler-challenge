import IDomainsRepository from '../interfaces/IDomainsRepository';
import IStoreDomainDTO from '../interfaces/dtos/IStoreDomainDTO';
import Domain from '../entities/Domain';

export default class DomainsRepository implements IDomainsRepository {
    private domains: Domain[];

    constructor() {
        this.domains = [];
    }

    public async findByName(name: string): Promise<Domain | undefined> {
        return this.domains.find(domain => domain?.name === name);
    }

    public async store(
        { name, ip_address, whois, web_hosting, time_to_live }: IStoreDomainDTO
    ): Promise<Domain> {
        const domain = new Domain();
        Object.assign(domain, {
            id: this.domains.length++, name, ip_address, whois, web_hosting,
            time_to_live, created_at: new Date(), updated_at: new Date()
        });
        return this.save(domain)
    }

    // Persist
    public async save(domain: Domain): Promise<Domain> {
        this.domains.push(domain);
        return domain;
    }
}