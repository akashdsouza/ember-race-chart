'use strict';



;define("dummy/app", ["exports", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("dummy/components/ember-race-chart", ["exports", "ember-race-chart/components/ember-race-chart"], function (_exports, _emberRaceChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberRaceChart.default;
    }
  });
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/modifiers/erc-bar-container-style", ["exports", "ember-race-chart/modifiers/erc-bar-container-style"], function (_exports, _ercBarContainerStyle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ercBarContainerStyle.default;
    }
  });
});
;define("dummy/modifiers/erc-bar-style", ["exports", "ember-race-chart/modifiers/erc-bar-style"], function (_exports, _ercBarStyle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ercBarStyle.default;
    }
  });
});
;define("dummy/modifiers/erc-container-style", ["exports", "ember-race-chart/modifiers/erc-container-style"], function (_exports, _ercContainerStyle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ercContainerStyle.default;
    }
  });
});
;define("dummy/router", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("dummy/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {
    model() {
      return fetch('assets/sample.json').then(function (response) {
        return response.json().then(function (data) {
          return data;
        });
      });
    }

  }

  _exports.default = ApplicationRoute;
});
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MjTD94fG",
    "block": "{\"symbols\":[\"currentKey\",\"@model\"],\"statements\":[[9,\"div\",true],[12,\"style\",\"width: 70%;margin:auto;\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"h2\",true],[12,\"id\",\"title\",null],[10],[1,1,0,0,\"Ember Race Chart\"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"style\",\"border:1px solid #666;padding: 20px;border-radius: 25px;\",null],[10],[1,1,0,0,\"\\n    \"],[7,\"ember-race-chart\",[],[[\"@data\",\"@keyWidth\"],[[27,[24,2],[]],\"300px\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"style\",\"margin-bottom: 20px;\",null],[10],[1,1,0,0,\"Period: \"],[9,\"span\",true],[12,\"style\",\"color:darkblue;text-decoration:underline\",null],[10],[1,0,0,0,[27,[24,1],[]]],[11],[11],[1,1,0,0,\"\\n    \"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n    \"],[9,\"em\",true],[12,\"style\",\"opacity:0.8;font-size:0.8rem;margin-top:1em;\",null],[10],[1,1,0,0,\"Note: The data has been derived using \"],[9,\"a\",true],[12,\"href\",\"https://www.npmjs.com/package/google-trends-api\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noreferrer noopener\",null],[10],[1,1,0,0,\"google-trends-api\"],[11],[1,1,0,0,\" for the key word \"],[9,\"span\",true],[12,\"style\",\"color: red\",null],[10],[1,1,0,0,\"'the flash hero'\"],[11],[1,1,0,0,\".\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
