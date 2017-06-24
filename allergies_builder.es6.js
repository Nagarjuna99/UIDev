import _ from 'underscore';
import builder_stub from 'builders/builder_stub';

export default function() {

  var defaultValues = {
    Noted: "8/28/2012",
    Name: "Sulfonamides",
    Reactions: ["Lip Swelling"]
  };
  var allergies = [];

  return {
    add: function(allergy) {
      allergies.push(_.extend({}, defaultValues, allergy));
      return this;
    },
    build: function() {
      return allergies;
    }
  };
}

