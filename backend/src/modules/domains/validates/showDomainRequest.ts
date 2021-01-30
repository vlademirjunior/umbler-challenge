import { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import isValidDomain from 'is-valid-domain';
import exceptionsConstants from '~/constants';

const validations = checkSchema({
    domainName: {
        custom: {
            options: (domainName: string) => {
                return isValidDomain(domainName);
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
            .json({ errors: errors.array() });
    }
];