import { Router } from 'express';
import DomainController from '../controllers/DomainController';
import { showDomainRequest } from '../validates/showDomainRequest';

const dnsRouters = Router();
const domainController = new DomainController();

dnsRouters.get('/:domainName', ...showDomainRequest, domainController.show);

export default dnsRouters;