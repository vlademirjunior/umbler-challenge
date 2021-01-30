import { container } from 'tsyringe';
import IDomainsRepository from '../modules/domains/interfaces/IDomainsRepository';
import DomainsRepository from '../modules/domains/repositories/DomainsRepository';
import IWhoisProvider from '../modules/domains/interfaces/IWhoisProvider';
import WhoisProvider from '../modules/domains/providers/WhoisProvider';
import DNSProvider from '~/modules/domains/providers/DNSProvider';
import IDNSProvider from '~/modules/domains/interfaces/IDNSProvider';

container.registerSingleton<IDomainsRepository>(
    'DomainsRepository', DomainsRepository
);
container.registerSingleton<IWhoisProvider>(
    'WhoisProvider', WhoisProvider
);
container.registerSingleton<IDNSProvider>(
    'DNSProvider', DNSProvider
);