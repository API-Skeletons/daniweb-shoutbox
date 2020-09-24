// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthConfig, LoginOptions } from 'angular-oauth2-oidc';

export const environment = {
  production: true,
  apiUrl: 'https://www.daniweb.com/connect/api/v4',
  groupId: 76,
  refresh: 20,
};

export const authConfig: AuthConfig = {
  oidc: false,
  loginUrl: 'https://www.daniweb.com/connect/oauth/auth',
  redirectUri: 'https://api-skeletons.github.io/daniweb-shoutbox',
  clientId: '1c',
  scope: 'profile_read conversations_read conversations_write groups_read groups_write',
  responseType: 'token',
  showDebugInformation: true
};

export const loginOptions: LoginOptions = {
  disableOAuth2StateCheck: false,
  onLoginError: (parts) => {
    alert('login error');
  },
  preventClearHashAfterLogin: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
