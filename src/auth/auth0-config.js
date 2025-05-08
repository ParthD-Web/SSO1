// auth0-config.js
export const auth0Config = {
  domain: 'dev-nc7cdg4nhc8z8gi1.us.auth0.com',
  clientId: 'uidgeWRN7e6NVtAxSWLjjYEMkhCwBDmf',
  redirectUri: 'http://localhost:5173',
  audience: 'https://dev-nc7cdg4nhc8z8gi1.us.auth0.com/api/v2/',
  scope: 'openid profile email offline_access',
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
};
