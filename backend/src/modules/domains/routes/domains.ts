import { Router } from 'express';
import DomainController from '../controllers/DomainController';
import { showDomainValidateRequest } from '../validates/showDomainValidateRequest';

const domainRouters = Router();
const domainController = new DomainController();

domainRouters.get('/:domainName', ...showDomainValidateRequest, domainController.show);

export default domainRouters;