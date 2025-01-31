/**
 * Application types
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */
import { FastifyInstance } from 'fastify';

export interface AppInstance extends FastifyInstance {
}

export interface Options {
  [string: string]: any;
}

export interface DoneFunc<T = any> {
  (result?: T): void;
}
