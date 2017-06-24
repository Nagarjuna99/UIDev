import angular from 'angular';

let TAB_KEYCODE = 9;

function stopShiftTabbing(event) {
  if (event.keyCode === TAB_KEYCODE && event.shiftKey) {
    event.preventDefault();
  }
}

function stopTabbing(event) {
  if (event.keyCode === TAB_KEYCODE && !event.shiftKey) {
    event.preventDefault();
  }
}

function modalDirective($compile, $rootElement, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/modal.html',
    scope: {
      visible: "=",
      title: "@"
    },
    transclude: true,
    link: function(scope, element, attr) {
      scope.$watch('visible', function(newValue, oldValue) {
        turnOnModalStyling(scope.visible);
        if (newValue !== oldValue) {
          makeAccessible(scope.visible);
        }
      });
      function turnOnModalStyling(visible) {
        if (visible) {

          $rootElement.addClass('modal-showing');
          element.children().addClass('modal-showing');
        } else {

          $rootElement.removeClass('modal-showing');
          element.children().removeClass('modal-showing');
        }
      }

      function makeAccessible(visible) {
        if (visible) {
          $rootElement.find('header').attr('aria-hidden', true);
          $rootElement.find('application-display').attr('aria-hidden', true);
          $rootElement.find('modals').removeAttr('aria-hidden');
          (element.find('button')[0]).focus();
        } else {
          $rootElement.find('modals').attr('aria-hidden', true);
          var objectToFocusOn = $rootElement.find('button')[0] || $rootElement.find('a')[0];
          if (objectToFocusOn) {
            objectToFocusOn.focus();
          }
          $rootElement.find('header').removeAttr('aria-hidden');
          $rootElement.find('application-display').removeAttr('aria-hidden');
        }
      }

      scope.$on('visibleChange', function(event, message) {
        var visible = message.visible;
        turnOnModalStyling(visible);
      });

      scope.removeModal = function() {
        scope.visible = false;
        scope.$emit('removeModal');
      };
    }
  };
}

modalDirective.$inject = ['$compile', '$rootElement', '$timeout'];

export default modalDirective;

