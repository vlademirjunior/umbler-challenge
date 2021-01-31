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
            web_hosting: this.improvedWebHostingExtraction({ whoisComplete }),
        }
    }

    /**
     * improvedWebHostingExtraction
     * Custom logic based on the results of other similar services
     * to locate the responsible web hosting company.
     * @see https://www.whoishostingthis.com/#search=umbler.com and compare.
     * @param whoisComplete IWhoisProviderKeyableDTO is an object whois.
     * @const umbler string Label for representing the hosting company Umbler
     * @const amazonAws string Label for representing the hosting company Amazon AWS
     * @const attributeByWeight Array Priority list with weight of attributes that may contain information from the hosting company.
     * @returns string | undefined
     */
    private improvedWebHostingExtraction(
        { whoisComplete }: IWhoisProviderKeyableDTO
    ): string | undefined {
        const umbler = 'Umbler';
        const amazonAws = 'Amazon AWS';
        const attributeByWeight = [
            'organizationName',
            'nameServer',
            'nserver',
            'registrationServiceProvidedBy',
            'registrantOrganization',
        ];
        for (const attribute of attributeByWeight) {
            if (whoisComplete[attribute]) {
                /* whoisComplete.nserver: "ns1.umbler.com" or
                whoisComplete.nameServer: "ns1.umbler.com " by example */
                if (attribute === 'nameServer' || attribute === 'nserver') {
                    if (whoisComplete[attribute].includes('umbler')) {
                        return umbler;
                    }
                    if (whoisComplete[attribute].includes('aws')) {
                        return amazonAws;
                    }
                } else {
                    return whoisComplete[attribute]// whoisComplete.xxxxxxx by example
                }
            }
        }
        return undefined;
    }
}