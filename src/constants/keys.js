import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export const SHORT_URLS_HOST = env.REACT_APP_SHORT_URLS_HOST
