const config = {
  oidc: {
    authorityUrl: 'http://84.216.133.5/IdentitySrv/connect/authorize',
    clientId: 'mvc',
    redirectUri: 'http://localhost:5002/signin-oidc',
    silentRenewUri: 'http://localhost:5002/silentrenew',
    logoutUrl: 'http://localhost:5002/logout/callback',
    loginUrl: 'http://localhost:5002/login',
    oidcUrl: 'http://84.216.133.5/IdentitySrv',
    scope: 'uqApi'
  },
  port: 5002,
  siteUrl: 'http://localhost:5002',
  graphqlUrl: 'http://localhost:4000/graphql'
};

export default config;
