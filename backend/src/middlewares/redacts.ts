import { Request, Response } from 'express';
import mung from 'express-mung';

/**
 * Redact for mitigation.
 * 
 * @see https://blog.rapid7.com/2019/12/06/hidden-helpers-security-focused-http-headers-to-protect-against-vulnerabilities/
 */
export const redactXPoweredBy = mung.headers(
    (_req: Request, res: Response): Response => {
        res.setHeader('x-powered-by', 'JSP/2.3');
        return res;
    }
);