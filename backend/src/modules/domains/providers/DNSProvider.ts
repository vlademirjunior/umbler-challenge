import util from 'util'
import dns from 'dns';
import IResolveDTO from '../interfaces/dtos/IResolveDTO';
import IDNSProvider from '../interfaces/IDNSProvider';
import IDomainDTO from '../interfaces/dtos/IDomainDTO';

export default class DNSProvider implements IDNSProvider {
    private defaultTtl: number;
    private defaultAddress: string;

    constructor() {
        this.defaultTtl = 0;
        this.defaultAddress = '';
    }
    
    public async resolve({ name }: IDomainDTO): Promise<IResolveDTO> {
        const resolve4 = util.promisify(dns.resolve4);
        const values = (await resolve4(name, { ttl: true })).shift();
        return {
            name,
            ip_address: values === undefined ? this.defaultAddress : values.address,
            time_to_live: values === undefined ? this.defaultTtl : values.ttl
        }
    }
}