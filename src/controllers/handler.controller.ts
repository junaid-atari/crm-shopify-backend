/**
 * Handler controller
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

// types
import { AppInstance, Options, DoneFunc } from '~/types/app';

// actions
import actionProcess from '~/actions/handler/process.action';
import actionValidate from '~/actions/handler/validate.action';
import actionConfigPreview from '~/actions/handler/config-preview.action';

export default (app: AppInstance, _opts: Options, done: DoneFunc) => {
  /**
   * @route POST /handler/process
   * The endpoint where Flow sends your action's payload when your step is being executed at runtime.
   * The payload contains data that you can use tso execute the action in your app.
   * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#flow-action-execution
   */
  app.post('/process', actionProcess);

  /**
   * @route POST /handler/validate
   * An endpoint that validates the contents of merchant-configurable
   * properties in an action payload when an action is saved.
   * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-validation
   */
  app.post('/validate', actionValidate);

  /**
   * @route POST /handler/config-preview
   * An endpoint that provides data about your custom configuration page to
   * display in the automation tool.
   * @see https://shopify.dev/docs/apps/build/flow/actions/endpoints#custom-configuration-page-preview
   */
  app.post('/config-preview', actionConfigPreview);

  done();
}
