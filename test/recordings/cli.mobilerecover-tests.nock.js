// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'f82cd983-da22-464f-8edd-31c8f4888e6b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'testAccount',
    registeredProviders: ['sqlserver', 'website', 'Mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function () {
}

exports.scopes = [
[function (nock) {
  var result =
  nock('https://management.core.windows.net')
    .post('/f82cd983-da22-464f-8edd-31c8f4888e6b/services/mobileservices/mobileservices/foo/recover?targetMobileService=bar')
    .reply(200, '', {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'transfer-encoding': 'chunked',
      expires: '-1',
      server: '33.0.6190.871 (rd_rdfe_n.130610-2140) Microsoft-HTTPAPI/2.0',
      'x-powered-by': 'ASP.NET',
      'x-ms-request-id': '58543a3771d8444c9a63e196568cde99',
      date: 'Tue, 18 Jun 2013 17:09:40 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.core.windows.net')
    .delete('/f82cd983-da22-464f-8edd-31c8f4888e6b/applications/barmobileservice')
    .reply(202, '', {
      'cache-control': 'no-cache',
      'content-length': '0',
      server: '33.0.6190.871 (rd_rdfe_n.130610-2140) Microsoft-HTTPAPI/2.0',
      'x-ms-request-id': 'ea355dfe8247400b92c2170abed6dc2f',
      date: 'Tue, 18 Jun 2013 17:09:43 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.core.windows.net')
    .get('/f82cd983-da22-464f-8edd-31c8f4888e6b/operations/ea355dfe8247400b92c2170abed6dc2f')
    .reply(200, '<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>ea355dfe-8247-400b-92c2-170abed6dc2f</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>', {
      'cache-control': 'no-cache',
      'content-length': '232',
      'content-type': 'application/xml; charset=utf-8',
      server: '33.0.6190.871 (rd_rdfe_n.130610-2140) Microsoft-HTTPAPI/2.0',
      'x-ms-request-id': '597f23a22ec645b398e0fb68f8d8967d',
      date: 'Tue, 18 Jun 2013 17:09:47 GMT'
    });
  return result;
}
]];