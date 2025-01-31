/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

// utils
import { getIntValue, getValue } from '~/env';

// types
import { FastifyListenOptions } from 'fastify';

/**
 * Fastify server listening options.
 */
export const listenOptions: FastifyListenOptions = {
  host: getValue<string>('HOST', '0.0.0.0'),
  port: getIntValue('PORT', 4000),
};
