import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN, // You'll get this from your Sentry project settings
  tracesSampleRate: 1.0, // Adjust this to control performance tracing
});