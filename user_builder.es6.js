import faker from 'Faker';

import _ from 'underscore';

export default function() {
  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();

  var defaultUser = {
    firstName: firstName,
    lastName: lastName,
    name: firstName + ' ' + lastName,
    email: faker.internet.email(),
    region: "MRN",
    isMember: true,
    type: "adult",
    gender: "male",
    dob: faker.date.past()
  };

  var defaultEntitlements = {};

  var aUser = _.extend({}, defaultUser);

  return {
    add: function(user) {
      aUser = _.extend({}, defaultUser, user);
      aUser.entitlements = _.extend({}, defaultEntitlements, user && user.entitlements);
      return this;
    },
    build: function() {
      return aUser;
    }
  };
}

