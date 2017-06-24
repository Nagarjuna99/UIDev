import faker from 'Faker';
import _ from 'underscore';

export default function() {
  var defaultEmail = faker.internet.email();
  var defaultResponse = {
    "region": "MRN",
    "lastName": faker.name.lastName(),
    "preferredFirstName": faker.name.firstName(),
    "email": defaultEmail,
    "ebizAccountRoles": ["MBR"],
    "firstName": faker.name.firstName(),
    "epicEmail": defaultEmail,
    "dob": faker.date.past(),
    "gender": "M"
  };


  var aUser = defaultResponse;

  return {
    add: function(userResponse) {
      aUser = _.extend({}, defaultResponse, userResponse);
      return this;
    },
    build: function() {
      return aUser;
    }
  };
}

