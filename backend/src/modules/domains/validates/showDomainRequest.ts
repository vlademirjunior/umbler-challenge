import { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import isValidDomain from 'is-valid-domain';
import exceptionsConstants from '~/constants';
import DNSProvider from '../providers/DNSProvider';

const validations = checkSchema({
    domainName: {
        custom: {
            options: (domainName: string) => {
                if (isValidDomain(domainName) === false) {
                    return Promise.reject('Domínio inválido');
                }
                return new DNSProvider().resolve({ name: domainName }).then(ok => ok)
                    .catch((error) => {
                        if (error.message.includes('ENOTFOUND')) {
                            return Promise.reject('Domínio não encontrado no registro do tipo A');
                        }
                        return Promise.reject('Não foi possível resolver esse domínio');
                    });
            }
        }
    }
});

export const showDomainRequest = [
    validations,
    (request: Request, response: Response, next: NextFunction) => {
        const errors = validationResult(request);
        if (errors.isEmpty()) {
            return next();
        }
        return response.status(exceptionsConstants.UNPROCESSABLE_ENTITY_STATUS_CODE)
            .json({ msg: errors.array().shift()?.msg });
    }
];