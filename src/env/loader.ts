/**
 * Environment variables utilities
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

import * as dotenv from 'dotenv';

/**
 * Load variables into memory, can be accessed by `process.env` later
 * @param config - Environment variables
 */
export const load = (config: Record<string, any>): void => {
  for (const [key, value] of Object.entries(config)) {
    process.env[key] = value;
  }
};

/**
 * Load the given .env file into memory (process environment variables)
 * @param path - Absolute path to .env file
 */
export const loadFile = (path: string): void => {
  dotenv.config({ path });
};
