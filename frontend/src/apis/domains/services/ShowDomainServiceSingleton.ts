import CDomainDTO from '../contracts/dtos/CDomainDTO';
import CViewDomainDTO from '../contracts/dtos/CViewDomainDTO';
import DomainResource from '../resources/DomainResource';

export default class ShowDomainServiceSingleton {
    private static instance: ShowDomainServiceSingleton;
    private domainResource: DomainResource;

    private constructor() {
        this.domainResource = new DomainResource();
    }

    public static getInstance(): ShowDomainServiceSingleton {
        if (ShowDomainServiceSingleton.instance === undefined) {
            ShowDomainServiceSingleton.instance = new ShowDomainServiceSingleton();
        }
        return ShowDomainServiceSingleton.instance;
    }

    public async execute({ name }: CDomainDTO): Promise<CViewDomainDTO> {
        const { data } = await this.domainResource.getByName({ name });
        return {
            name: data.name,
            whois: data.whois,
            web_hosting: data.web_hosting,
            ip_address: data.ip_address
        }
    }
}