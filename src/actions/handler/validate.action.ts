/**
 * Action: /POST /handler/validate
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:22:59
 */

// types
import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify';
import { ValidationPayload } from '~/types/shopify-validation';

interface IRequest extends RouteGenericInterface {
  Body: ValidationPayload;
}

/**
 * An endpoint that validates the contents of merchant-configurable
 * properties in an action payload when an action is saved.
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-validation
 */
export default async (_req: FastifyRequest<IRequest>, _replay: FastifyReply): Promise<any> => {
  return { success: true };
}
