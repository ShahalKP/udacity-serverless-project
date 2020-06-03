// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '...'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // Create an Auth0 application and copy values from it into this map
  domain: 'dev-q8p1im2k.eu.auth0.com',            // Auth0 domain
  clientId: 'xd9KakAWbx4vJD0FCvU57HWtdkcvIjv6',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
