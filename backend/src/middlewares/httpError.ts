import { NextFunction, Request, Response } from 'express';
import HttpError from '../errors';
import httpErrorConstants from '../constants';

export default function (
  error: HttpError,
  _request: Request,
  response: Response,
  _next: NextFunction
): void {
  const code = error.code || httpErrorConstants.INTERNAL_STATUS_CODE;
  const message = error.message || httpErrorConstants.INTERNAL_MESSAGE;
  response.status(code).send({ code, message });
}