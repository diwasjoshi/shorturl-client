import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();


export const BASE_URL = env.REACT_APP_BASE_URL
