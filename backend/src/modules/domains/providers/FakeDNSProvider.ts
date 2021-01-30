import IResolveDTO from '../interfaces/dtos/IResolveDTO';
import IDNSProvider from '../interfaces/IDNSProvider';
import IDomainDTO from '../interfaces/dtos/IDomainDTO';
import constants from '../../../constants';

interface IRecordATableTypeA extends IDomainDTO {
    ttl: number,
    address: string,
}

export default class FakeDNSProvider implements IDNSProvider {
    private dnsServer: IRecordATableTypeA[];
    private defaultTtl: number;
    private defaultAddress: string;

    constructor() {
        this.dnsServer = [
            {
                name: constants.TEST_DOMAIN_NAME,
                address: '192.168.1.1',
                ttl: constants.TEST_DOMAIN_TTL
            },
            {
                name: constants.TEST_DOMAIN_NAME,
                address: '192.168.1.2',
                ttl: constants.TEST_DOMAIN_TTL
            }
        ];
        this.defaultTtl = 0;
        this.defaultAddress = '';
    }

    public async resolve({ name }: IDomainDTO): Promise<IResolveDTO> {
        const addressWithTtl = this.dnsServer.filter(domain => domain.name === name).shift();
        return {
            name,
            ip_address: addressWithTtl === undefined ? this.defaultAddress : addressWithTtl.address,
            time_to_live: addressWithTtl === undefined ? this.defaultTtl : addressWithTtl.ttl
        }
    }
}