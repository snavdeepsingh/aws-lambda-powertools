import { Logger } from '@aws-lambda-powertools/logger';

const {
  LOG_SAMPLE_RATE: logSampleRate = '1.0',
  LOG_LEVEL: loglevel,
  POWERTOOLS_SERVICE_NAME: serviceName = 'unknown',
} = process.env;

export const logger = new Logger({
  serviceName,
  logLevel: loglevel as any,
  sampleRateValue: parseFloat(logSampleRate),
});
