const production = {
  API_SERVER : 'http://ssoapi.bnb.com:20200',
  SSO_SERVER : 'http://sso.bnb.com:20100',
	APP_TOKEN: '',

}

const development = {
  API_SERVER : 'http://ssoapi.bnb.com:20200',
  SSO_SERVER : 'http://sso.bnb.com:20100',
  APP_TOKEN: '1lJ4BglwGohJO6WZWw0Eh9l14gJ',


}
const config = {production, development};

export default config[process.env.NODE_ENV];
