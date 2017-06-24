import 'angular-translate';
import translationContent from 'translation_content';

function translations($translateProvider, $provide) {
  $translateProvider.useLoader('translationLoader');
  $provide.factory('translationLoader', ['contentGateway', function(contentGateway) {
    return function(options) {
      var staticTranslation = translationContent.englishTranslations;

      return contentGateway.getContent().then(function(node) {

        if (options.key === 'es') {
          staticTranslation = translationContent.spanishTranslations;
        }

        return _.extend({}, staticTranslation, node);
      }).catch(function(e) {
        return staticTranslation;
      });
    };
  }]);
  $translateProvider.preferredLanguage('en_US');
  $translateProvider.useSanitizeValueStrategy('escaped');
}

translations.$inject = ['$translateProvider', '$provide'];

export default translations;
