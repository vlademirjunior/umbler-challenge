import { subSeconds } from 'date-fns';
import FakeDomainsRepository from '../repositories/FakeDomainsRepository';
import FakeWhoisProvider from '../providers/FakeWhoisProvider';
import FakeDNSProvider from '../providers/FakeDNSProvider';
import ShowDomainService from './ShowDomainService';
import constant from '../../../constants';

let fakeDomainsRepository: FakeDomainsRepository;
let fakeWhoisProvider: FakeWhoisProvider;
let fakeDNSProvider: FakeDNSProvider;
let showDomainService: ShowDomainService;

describe('ShowDomainService', () => {
  beforeEach(() => {
    fakeDomainsRepository = new FakeDomainsRepository();
    fakeDNSProvider = new FakeDNSProvider();
    fakeWhoisProvider = new FakeWhoisProvider();
    showDomainService = new ShowDomainService(
      fakeDomainsRepository, fakeWhoisProvider, fakeDNSProvider
    );
  });

  it('must save domain information.', async () => {
    const resolve = jest.spyOn(fakeDNSProvider, 'resolve');
    const get = jest.spyOn(fakeWhoisProvider, 'get');
    const informationFilter = jest.spyOn(fakeWhoisProvider, 'informationFilter');
    const store = jest.spyOn(fakeDomainsRepository, 'store');

    const domain = await showDomainService.execute({ name: constant.TEST_DOMAIN_NAME });

    expect(resolve).toHaveBeenCalled();
    expect(get).toHaveBeenCalled();
    expect(informationFilter).toHaveBeenCalled();
    expect(store).toHaveBeenCalled();
    expect(domain.name).toBe(constant.TEST_DOMAIN_NAME);
  });

  it('must update domain information why Ttl expired.', async () => {
    const { time_to_live } = await fakeDNSProvider.resolve({ name: constant.TEST_DOMAIN_NAME });
    const newDomain = await fakeDomainsRepository.store({
      name: constant.TEST_DOMAIN_NAME, time_to_live
    });
    const expiredDate = subSeconds(newDomain.updated_at, (time_to_live + 1));
    Object.assign(newDomain, { updated_at: expiredDate });
    await fakeDomainsRepository.save(newDomain);
    const save = jest.spyOn(fakeDomainsRepository, 'save');

    const domainUpdated = await showDomainService.execute({ name: constant.TEST_DOMAIN_NAME });

    expect(save).toHaveBeenCalled();
    expect(domainUpdated.name).toBe(constant.TEST_DOMAIN_NAME);
  });

  it('must avoid a new query.', async () => {
    const firstQuery = await showDomainService.execute({ name: constant.TEST_DOMAIN_NAME });// First
    const resolve = jest.spyOn(fakeDNSProvider, 'resolve');
    const get = jest.spyOn(fakeWhoisProvider, 'get');
    const informationFilter = jest.spyOn(fakeWhoisProvider, 'informationFilter');
    const store = jest.spyOn(fakeDomainsRepository, 'store');

    const secondQuery = await showDomainService.execute({ name: constant.TEST_DOMAIN_NAME });// Second

    expect(resolve).not.toHaveBeenCalled();
    expect(get).not.toHaveBeenCalled();
    expect(informationFilter).not.toHaveBeenCalled();
    expect(store).not.toHaveBeenCalled();
    expect(secondQuery.name).toBe(firstQuery.name);
  });
});