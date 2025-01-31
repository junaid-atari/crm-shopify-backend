/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:45:42
 */

// controllers
import mainController from '~/controllers/main.controller';
import handlerController from '~/controllers/handler.controller';

// types
import { AppInstance } from '~/types/app';

/**
 * Map of controllers
 * @param app - Fastify app instance
 */
export default (app: AppInstance) => {
  app.register(mainController, { prefix: '/' });
  app.register(handlerController, { prefix: '/handler' });
}
