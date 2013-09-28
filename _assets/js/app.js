(function(window, document) {

  'use strict';

  /* Utilities */

  var Utils = Utils || {};

  Utils.each = function(elements, callback) {
    var count = elements.length, i;
    for (i = 0; i < count; i++) {
      callback(elements[i]);
    }
  };

  Utils.bind = function(element, action, callback) {
    if (element.addEventListener) {
      element.addEventListener(action, function(event) {
        callback(event);
      });
    } else {
      element.attachEvent('on' + action, function(event) {
        callback(event);
      });
    }
  };

  /* Mobile navigation */

  var Nav = Nav || {};

  Nav.create = function() {
    var links = document.querySelectorAll('.js-nav--item'),
        select = document.createElement('select'),
        first = document.createElement('option'),
        fragment = document.createDocumentFragment(),
        nav = document.querySelector('#js-mobile-nav');

    first.innerHTML = 'Navigation';
    first.setAttribute('value', '#');
    first.setAttribute('selected', 'selected');

    select.setAttribute('id', 'js-mobile-select');
    select.setAttribute('class', 'js-nav--mobile');
    select.appendChild(first);

    Utils.each(links, function(link) {
      var title = link.textContent || link.innerText,
          anchor = link.getAttribute('href'),
          item = document.createElement('option');

      item.setAttribute('value', anchor);
      item.innerHTML = '&raquo;' + title;
      fragment.appendChild(item);
    });

    select.appendChild(fragment);
    nav.appendChild(select);
  };

  Nav.watch = function() {
    var mobile = document.querySelector('#js-mobile-select');
    Utils.bind(mobile, 'change', function(event) {
      if (event.target.value) {
        window.location.href = event.target.value;
      }
    });
  };

  Nav.init = function() {
    Nav.create();
    Nav.watch();
  };

  /* Code highlighting */

  var Highlight = Highlight || {};

  Highlight.init = function() {
    hljs.initHighlighting();
  };

  /* App */

  var App = App || {};

  App.init = function() {
    Nav.init();
    Highlight.init();
  };

  App.init();

})(window, window.document);
