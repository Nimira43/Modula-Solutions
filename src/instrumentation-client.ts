import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c830ea6e2d25456d2fe9ecc360de5999@o4507187792052224.ingest.de.sentry.io/4509317627117648",

 
  integrations: [
    Sentry.replayIntegration(),
  ],

 
  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,


  replaysOnErrorSampleRate: 1.0,

  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;