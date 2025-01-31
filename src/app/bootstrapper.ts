/**
 * Fastify application bootstrapper
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

import fastify from 'fastify';

// mappers
import controllersMapper from '~/controllers/index';

// types
import { AppInstance } from '~/types/app';

/**
 * Fastify server instance.
 */
const app = fastify() as AppInstance;

// register app controllers
app.register(controllersMapper);

export {app};
