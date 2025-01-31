/**
 * Main controller
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-31 14:15:14
 */

import 'dotenv/config';

// core
import { app } from '~/app/bootstrapper';
import { listenOptions as appListenOptions } from '~/app/app.options';

/// Application listener interface
app.listen(appListenOptions, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
