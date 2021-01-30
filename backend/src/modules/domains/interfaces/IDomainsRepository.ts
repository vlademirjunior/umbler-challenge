import Domain from '../entities/Domain';
import IStoreDomainDTO from './dtos/IStoreDomainDTO';

export default interface IDomainsRepository {
  findByName(name: string): Promise<Domain | undefined>;
  store(data: IStoreDomainDTO): Promise<Domain>;
  save(data: Domain): Promise<Domain>;
}