import { Request, Response } from 'express';
import mung from 'express-mung';

export const redactXPoweredBy = mung.headers(
    (_req: Request, res: Response): Response => {
        res.setHeader('x-powered-by', 'JSP/2.3');
        return res;
    }
);