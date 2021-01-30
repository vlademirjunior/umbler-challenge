import { Router } from 'express';
import domainRouters from '../modules/domains/routes/domains';

const facade = Router();

facade.use('/api/domains', domainRouters);

export default facade;