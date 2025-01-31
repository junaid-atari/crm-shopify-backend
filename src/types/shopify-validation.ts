/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:16:43
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-validation
 */

export interface Properties {
  outside_na: boolean;
  guest_no: number;
  first_name: string;
  customer_id: string;
}

export interface Step {
  step_reference: string;
  properties: Properties;
}

export interface ValidationPayload {
  shop_id: string;
  shopify_domain: string;
  handle: string;
  locale: string;
  steps: Step[];
}
