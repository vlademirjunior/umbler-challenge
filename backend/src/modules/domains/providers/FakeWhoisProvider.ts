import IWhoisProvider from '../interfaces/IWhoisProvider';
import IWhoisProviderKeyableDTO from '../interfaces/dtos/IWhoisProviderKeyableDTO';
import IDomainDTO from '../interfaces/dtos/IDomainDTO';
import IFormatterDTO from '../interfaces/dtos/IFormatterDTO';
import constant from '../../../constants';

interface IDomainInfomationTable {
    domainName: string,
    registrationServiceProvidedBy: string | undefined,
    nameServer: string | undefined,
}

export default class FakeWhoisProvider implements IWhoisProvider {
    private whoisInformationTable: IDomainInfomationTable[];

    constructor() {
        this.whoisInformationTable = [
            {
                'domainName': constant.TEST_DOMAIN_NAME,
                'registrationServiceProvidedBy': 'Locaweb',
                'nameServer': 'ns254.umbler.com'
            }
        ];
    }

    public async get({ name }: IDomainDTO): Promise<IWhoisProviderKeyableDTO> {
        return this.whoisInformationTable.filter(whois => whois.domainName === name);
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