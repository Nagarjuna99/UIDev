/* jshint esnext: true */
export default function($delegate) {

  var cache = {};
  var proxy = {};

  Object.keys($delegate).forEach(function(methodName) {
    proxy[methodName] = function() {
      var args = Array.prototype.slice.apply(arguments);
      var key = JSON.stringify([methodName].concat(args));
      if (!cache.hasOwnProperty(key)) {
        cache[key] = $delegate[methodName].apply(null, args);
      }
      return cache[key];
    };
  });

  return proxy;
}
