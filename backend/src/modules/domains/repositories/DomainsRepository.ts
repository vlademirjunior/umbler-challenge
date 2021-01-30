import { getRepository, Repository } from 'typeorm';
import IDomainsRepository from '../interfaces/IDomainsRepository';
import IStoreDomainDTO from '../interfaces/dtos/IStoreDomainDTO';
import Domain from '../entities/Domain';

export default class DomainsRepository implements IDomainsRepository {
    private ormRepository: Repository<Domain>;

    constructor() {
        this.ormRepository = getRepository(Domain);
    }

    public async findByName(name: string): Promise<Domain | undefined> {
        return this.ormRepository.findOne({ where: { name } });
    }

    public async store(
        { name, ip_address, whois, web_hosting, time_to_live }: IStoreDomainDTO
    ): Promise<Domain> {
        const domain = this.ormRepository.create({
            name, ip_address, whois, web_hosting, time_to_live
        });
        return this.ormRepository.save(domain)
    }

    // Persist with transaction by default
    public async save(domain: Domain): Promise<Domain> {
        return this.ormRepository.save(domain);
    }
}