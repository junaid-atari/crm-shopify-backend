/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 15:16:27
 * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-validation
 */

export interface Properties {
  customer_id: string;
  sms_message: string;
  marketing_activity_id: string;
}

export interface ConfigurationPagePreviewPayload {
  shop_id: string;
  shopify_domain: string;
  step_reference: string;
  handle: string;
  locale: string;
  properties: Properties;
}
