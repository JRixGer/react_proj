import config from '../config';

export const IDENTITY_CONFIG = {
  authority: 'http://84.216.133.5/IdentitySrv/connect/authorize',
  client_id: 'mvc',
  redirect_uri: process.env.REACT_APP_OIDC_REDIRECT_URI || config.oidc.redirectUri,
  post_logout_redirect_uri: process.env.REACT_APP_OIDC_LOGOUT_URL || config.oidc.logoutUrl,
  response_type: 'token',
  scope: process.env.REACT_APP_OIDC_SCOPE || config.oidc.scope,
  silent_redirect_uri: process.env.REACT_APP_OIDC_SILENT_RENEW_URI || config.oidc.silentRenewUri,
  automaticSilentRenew: true,
  accessTokenExpiringNotificationTime: 4,
  silentRequestTimeout:10000,
  login: process.env.REACT_APP_OIDC_LOGIN_URL || config.oidc.loginUrl,
  filterProtocolClaims: true,
  loadUserInfo: false
};

export const METADATA_OIDC = {
  issuer: 'https://identityserver',
  jwks_uri: "http://84.216.133.5/IdentitySrv/.well-known/openid-configuration/jwks",
  authorization_endpoint: "http://84.216.133.5/IdentitySrv/connect/authorize",
  token_endpoint: "http://84.216.133.5/IdentitySrv/connect/token",
  userinfo_endpoint: "http://84.216.133.5/IdentitySrv/connect/userinfo",
  end_session_endpoint: "http://84.216.133.5/IdentitySrv/connect/endsession",
  check_session_iframe: "http://84.216.133.5/IdentitySrv/connect/checksession",
  revocation_endpoint: "http://84.216.133.5/IdentitySrv/connect/revocation",
  introspection_endpoint: "http://84.216.133.5/IdentitySrv/connect/introspect"
};