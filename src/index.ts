import { injectLambdaContext } from '@aws-lambda-powertools/logger/lib/cjs/middleware/middy';
import middy from '@middy/core';
import { logger } from './logger';

const log = logger;

export {
  injectLambdaContext,
  logger,
  log,
  middy,
};
