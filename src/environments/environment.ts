// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };


export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyACtk_VX61i_w_0B0YpKlL2x66OLCNgv3s',
    authDomain: 'ngfire-e9afc.firebaseapp.com',
    databaseURL: 'https://ngfire-e9afc.firebaseio.com',
    projectId: 'ngfire-e9afc',
    storageBucket: 'ngfire-e9afc.appspot.com',
    messagingSenderId: '649810772121'
  }
};