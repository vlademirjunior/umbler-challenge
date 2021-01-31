import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ShowDomainService from '../services/ShowDomainService';
import BadGatewayException from '~/errors';
import exceptionsConstants from '~/constants';

export default class DomainController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { domainName } = request.params;
      const showDomain = container.resolve(ShowDomainService);
      const viewDomain = await showDomain.execute({ name: domainName });
      return response.json(viewDomain);
    } catch (_exception) {
      throw new BadGatewayException(
        exceptionsConstants.BAD_GATEWAY_STATUS_CODE,
        exceptionsConstants.BAD_GATEWAY_STATUS_CODE_MESSAGE
      );
    }
  }
}