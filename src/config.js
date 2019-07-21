export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://129.28.173.180:8080/api/'
  : 'http://localhost:8080/api/';

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? '.jackhu.top'
  : '';


export const Server = (process.env.NODE_ENV === 'production') ? 'http://129.28.173.180:8099': 'localhost:8099';

