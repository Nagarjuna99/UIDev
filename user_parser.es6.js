import _ from 'underscore';
import Immutable from 'immutable';

export default {
  parse: function(user) {
    var name = user.firstName + " " + user.lastName;
    return Immutable.Map(_.extend(
      {},
      {
        isMember: _.contains(user.ebizAccountRoles, "MBR"),
        name: name
      },
      _.pick(user, ["firstName",
        "lastName",
        "email",
        "region",
        "gender",
        "dob"])));
  }
};

