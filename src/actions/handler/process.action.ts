/**
 * Action: /POST /handler/process
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:22:59
 */

// types
import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify';
import { RuntimePayload } from '~/types/shopify-runtime';

interface IRequest extends RouteGenericInterface {
  Body: RuntimePayload;
}

/**
 * The endpoint where Flow sends your action's payload when your step is being executed at runtime.
 * The payload contains data that you can use tso execute the action in your app.
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#flow-action-execution
 */
export default async (_req: FastifyRequest<IRequest>, _replay: FastifyReply): Promise<any> => {
  return { success: true };
}
