import userBuilder from 'builders/user_builder';
import userPayloadBuilder from 'builders/user_payload_builder';
import proxyBuilder from 'builders/proxy_builder';
import entitlementsPayloadBuilder from 'builders/entitlements_payload_builder';
import allergiesBuilder from 'builders/allergies_builder';
export default {
  user: function() {
    return userBuilder();
  },
  userPayload: function() {
    return userPayloadBuilder();
  },
  proxies: function() {
    return proxyBuilder();
  },
  entitlementsPayload: function() {
    return entitlementsPayloadBuilder();
  },
  allergies: function() {
    return allergiesBuilder();
  }

};
