/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:17:40
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#flow-action-execution
 */

export interface Properties {
  customer_id: string;
  amount: string;
  step_reference: string;
}

export interface RuntimePayload {
  shop_id: string;
  shopify_domain: string;
  action_run_id: string;
  action_definition_id: string;
  handle: string;
  properties: Properties;
}

