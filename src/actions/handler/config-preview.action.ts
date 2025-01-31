/**
 * Action: /POST /handler/config-preview
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:22:59
 */

// types
import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify';
import { ConfigurationPagePreviewPayload } from '~/types/shopify-config-page';

interface IRequest extends RouteGenericInterface {
  Body: ConfigurationPagePreviewPayload;
}

/**
 * An endpoint that provides data about your custom configuration page to
 * display in the automation tool.
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-configuration-page-preview
 */
export default async (_req: FastifyRequest<IRequest>, _replay: FastifyReply): Promise<any> => {
  return { success: true };
}
