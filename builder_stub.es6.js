import _ from 'underscore';

export default function (defaultValues) {

  var thisBuilder = {};
  var obj = {};

  var setValue = ((key, value) => {
    obj[key] = value;
    return thisBuilder;
  });

  var setters = _.object(Object.keys(defaultValues).map(function(key) {
    return [key, setValue.bind(undefined, key)];
  }));
  thisBuilder = _.extend(thisBuilder, setters);
  return _.extend(thisBuilder, {
    build: () => _.extend({}, defaultValues, obj)
  });

}

