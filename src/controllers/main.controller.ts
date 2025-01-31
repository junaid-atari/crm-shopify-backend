/**
 * Main controller
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

import createHttpError from 'http-errors';

// types
import { AppInstance, Options, DoneFunc } from '~/types/app';

export default (app: AppInstance, _opts: Options, done: DoneFunc) => {
  /**
   * @route GET /
   * Serves as an entry point for the application.
   */
  app.get('/', async () => {
    return new createHttpError.NotFound();
  });

  /**
   * @route GET /status
   * To check the status of the application.
   */
  app.get('/status', async () => {
    return { status: 'ok' };
  });

  done();
}
