'use strict';

define("dummy/tests/integration/components/ember-race-chart-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  const testData = {
    currentData: [{
      key: 'a',
      value: 10
    }]
  };

  const getKeys = () => {
    return (0, _testHelpers.findAll)('.erc-bar-key').map(e => e.textContent).join('');
  };

  (0, _qunit.module)('Integration | Component | ember-race-chart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.set('testData', testData);
    });
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <EmberRaceChart />
      */
      {
        id: "/Hv4XuLj",
        block: "{\"symbols\":[],\"statements\":[[7,\"ember-race-chart\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <EmberRaceChart>
              template block text
            </EmberRaceChart>
          
      */
      {
        id: "KcbVMfmJ",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"ember-race-chart\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
    (0, _qunit.test)('current key is yielded from component', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <EmberRaceChart @data={{testData}} as |currentKey|>
            <div data-test-key>{{currentKey}}</div>
          </EmberRaceChart>
          
      */
      {
        id: "wn6h5Fch",
        block: "{\"symbols\":[\"currentKey\"],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"ember-race-chart\",[],[[\"@data\"],[[27,[26,0,\"AppendSingleId\"],[]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"data-test-key\",\"\",null],[10],[1,0,0,0,[27,[24,1],[]]],[11],[1,1,0,0,\"\\n    \"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"testData\"]}",
        meta: {}
      }));
      assert.dom('[data-test-key]').hasText('currentData', 'Current key should be yielded from component');
    });
    (0, _qunit.test)('keys and bars are displayed with correct width', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <div style='width: 500px'>
            <EmberRaceChart @data={{testData}} />
          </div>
          
      */
      {
        id: "znsgHaj8",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"style\",\"width: 500px\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"ember-race-chart\",[],[[\"@data\"],[[27,[26,0,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"testData\"]}",
        meta: {}
      }));
      assert.dom('.erc-bar-container').hasStyle({
        width: '500px'
      }, 'container should take up full width');
      assert.dom('.erc-bar-key').hasStyle({
        width: '200px'
      }, 'default key width should be applied');
    });
    (0, _qunit.test)('formatted value is shown', async function (assert) {
      this.set('valueFormatter', v => `${v}K`);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <EmberRaceChart @data={{testData}} @valueFormatter={{valueFormatter}} />
          
      */
      {
        id: "lZwdfZj7",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"ember-race-chart\",[],[[\"@data\",\"@valueFormatter\"],[[27,[26,0,\"AppendSingleId\"],[]],[27,[26,1,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"testData\",\"valueFormatter\"]}",
        meta: {}
      }));
      assert.dom('.erc-bar-value').hasText(`${testData.currentData[0].value}K`, 'Formatted value should be shown in chart');
    });
    (0, _qunit.test)('sort', async function (assert) {
      this.set('data', {
        currentData: [{
          key: 'b',
          value: '100'
        }, {
          key: 'c',
          value: '80'
        }, {
          key: 'a',
          value: '120'
        }]
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <EmberRaceChart @data={{data}} @sort={{sort}}/>
          
      */
      {
        id: "AWY0Qrrb",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"ember-race-chart\",[],[[\"@data\",\"@sort\"],[[27,[26,0,\"AppendSingleId\"],[]],[27,[26,1,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"data\",\"sort\"]}",
        meta: {}
      }));
      assert.equal(getKeys(), 'abc', 'Bars should be rendered in descending order by default');
      this.set('sort', 'asc');
      assert.equal(getKeys(), 'cba', 'Bars should be rendered in ascending order if specified');
      this.set('sort', 'none');
      assert.equal(getKeys(), 'bca', 'Bars should be rendered in given order if sort is none');
      this.set('sort', 'desc');
      assert.equal(getKeys(), 'abc', 'Bars should be rendered in descending order if specified');
    });
    (0, _qunit.test)('chart switches after interval', async function (assert) {
      this.set('data', {
        currentData: [{
          key: 'a',
          value: '100'
        }, {
          key: 'b',
          value: 120
        }],
        nextData: [{
          key: 'a',
          value: '120'
        }, {
          key: 'b',
          value: 100
        }]
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <EmberRaceChart @data={{data}} @interval=2000 as |currentKey|>
            <div data-test-key>{{currentKey}}</div>
          </EmberRaceChart>
          
      */
      {
        id: "VvqXO7d6",
        block: "{\"symbols\":[\"currentKey\"],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"ember-race-chart\",[],[[\"@data\",\"@interval\"],[[27,[26,0,\"AppendSingleId\"],[]],\"2000\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"data-test-key\",\"\",null],[10],[1,0,0,0,[27,[24,1],[]]],[11],[1,1,0,0,\"\\n    \"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"data\"]}",
        meta: {}
      }));
      assert.dom('[data-test-key]').hasText('currentData', 'Current key should be displayed');
      assert.equal(getKeys(), 'ba', 'Bars should be rendered in descending order for current data');
      setTimeout(() => {
        (0, _testHelpers.resumeTest)();
      }, 3000);
      await this.pauseTest();
      assert.dom('[data-test-key]').hasText('nextData', 'next key should be displayed');
      assert.equal(getKeys(), 'ab', 'Bars should be rendered in descending order for next data');
    });
  });
});
define("dummy/tests/integration/modifiers/erc-bar-container-style-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | erc-bar-container-style', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <div
            {{erc-bar-container-style
              index=1
              height="10px"
              space=10
              transitionDuration='0.5s'
            }}
            data-test-bar-container
          >
          </div>
          
      */
      {
        id: "l8F3Ii58",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",false],[23,\"data-test-bar-container\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,[[\"index\",\"height\",\"space\",\"transitionDuration\"],[1,\"10px\",10,\"0.5s\"]]],[10],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"erc-bar-container-style\"]}",
        meta: {}
      }));
      assert.dom('[data-test-bar-container]').hasStyle({
        transitionDuration: '0.5s',
        height: '10px',
        top: '20px'
      });
    });
  });
});
define("dummy/tests/integration/modifiers/erc-bar-style-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | erc-bar-style', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <div
              {{erc-bar-style
                value=100
                max=100
                barColor='#000'
                transitionDuration='0.5s'
              }}
              data-test-bar-full
            ></div>
            <div
              {{erc-bar-style
                value=50
                max=100
                barColor='#000'
                transitionDuration='0.5s'
              }}
              data-test-bar-half
            ></div>
          
      */
      {
        id: "n3/mCDn8",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",false],[23,\"data-test-bar-full\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,[[\"value\",\"max\",\"barColor\",\"transitionDuration\"],[100,100,\"#000\",\"0.5s\"]]],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",false],[23,\"data-test-bar-half\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,[[\"value\",\"max\",\"barColor\",\"transitionDuration\"],[50,100,\"#000\",\"0.5s\"]]],[10],[11],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"erc-bar-style\"]}",
        meta: {}
      }));
      assert.dom('[data-test-bar-full]').hasStyle({
        transitionDuration: '0.5s',
        backgroundColor: 'rgb(0, 0, 0)',
        flexBasis: '100%'
      });
      assert.dom('[data-test-bar-half]').hasStyle({
        flexBasis: '50%'
      });
    });
  });
});
define("dummy/tests/integration/modifiers/erc-container-style-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | erc-container-style', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('without child element', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{erc-container-style}} data-test-container></div>
      */
      {
        id: "RITHjsre",
        block: "{\"symbols\":[],\"statements\":[[9,\"div\",false],[23,\"data-test-container\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,null],[10],[11]],\"hasEval\":false,\"upvars\":[\"erc-container-style\"]}",
        meta: {}
      }));
      assert.dom('[data-test-container]').hasStyle({
        height: '0px'
      }, 'height shouldn\'t be set if there are no child elements');
    });
    (0, _qunit.test)('count is not set', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{erc-container-style}} data-test-container><div>Test</div></div>
      */
      {
        id: "+cWY7cVO",
        block: "{\"symbols\":[],\"statements\":[[9,\"div\",false],[23,\"data-test-container\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,null],[10],[9,\"div\",true],[10],[1,1,0,0,\"Test\"],[11],[11]],\"hasEval\":false,\"upvars\":[\"erc-container-style\"]}",
        meta: {}
      }));
      assert.dom('[data-test-container]').hasStyle({
        height: '0px'
      }, 'height shouldn\'t be set if count is zero');
    });
    (0, _qunit.test)('computed height', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <div {{erc-container-style count=10 space=10}} data-test-container>
              <div style="height: 10px"></div>
            </div>
          
      */
      {
        id: "Wb9PUwWQ",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",false],[23,\"data-test-container\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],null,[[\"count\",\"space\"],[10,10]]],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"style\",\"height: 10px\",null],[10],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"erc-container-style\"]}",
        meta: {}
      }));
      assert.dom('[data-test-container]').hasStyle({
        height: '200px'
      }, 'height should be computed correctly');
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
