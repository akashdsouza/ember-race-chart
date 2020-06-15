import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  findAll,
  resumeTest
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const testData = {
  currentData: [{
    key: 'a',
    value: 10
  }]
};

const getKeys = () => {
  return findAll('.erc-bar-key').map(e => e.textContent).join('')
}

module('Integration | Component | ember-race-chart', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('testData', testData);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmberRaceChart />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <EmberRaceChart>
        template block text
      </EmberRaceChart>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('current key is yielded from component', async function(assert) {
    await render(hbs`
    <EmberRaceChart @data={{testData}} as |currentKey|>
      <div data-test-key>{{currentKey}}</div>
    </EmberRaceChart>
    `);
    assert.dom('[data-test-key]').hasText('currentData', 'Current key should be yielded from component');
  });

  test('keys and bars are displayed with correct width', async function(assert) {
    await render(hbs`
    <div style='width: 500px'>
      <EmberRaceChart @data={{testData}} />
    </div>
    `);
    assert.dom('.erc-bar-container').hasStyle({ width: '500px' }, 'container should take up full width');
    assert.dom('.erc-bar-key').hasStyle({ width: '200px' }, 'default key width should be applied');
  });

  test('formatted value is shown', async function(assert) {
    this.set('valueFormatter', (v) => `${v}K`);
    await render(hbs`
    <EmberRaceChart @data={{testData}} @valueFormatter={{valueFormatter}} />
    `);
    assert.dom('.erc-bar-value').hasText(`${testData.currentData[0].value}K`, 'Formatted value should be shown in chart');
  });

  test('sort', async function(assert) {
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
    await render(hbs`
    <EmberRaceChart @data={{data}} @sort={{sort}}/>
    `);
    assert.equal(getKeys(), 'abc', 'Bars should be rendered in descending order by default');
    this.set('sort', 'asc');
    assert.equal(getKeys(), 'cba', 'Bars should be rendered in ascending order if specified');
    this.set('sort', 'none');
    assert.equal(getKeys(), 'bca', 'Bars should be rendered in given order if sort is none');
    this.set('sort', 'desc');
    assert.equal(getKeys(), 'abc', 'Bars should be rendered in descending order if specified');
  });

  test('chart switches after interval', async function(assert) {
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
    await render(hbs`
    <EmberRaceChart @data={{data}} @interval=2000 as |currentKey|>
      <div data-test-key>{{currentKey}}</div>
    </EmberRaceChart>
    `);

    assert.dom('[data-test-key]').hasText('currentData', 'Current key should be displayed');
    assert.equal(getKeys(), 'ba', 'Bars should be rendered in descending order for current data');

    setTimeout(() => {
      resumeTest()
    }, 3000);
    await this.pauseTest();

    assert.dom('[data-test-key]').hasText('nextData', 'next key should be displayed');
    assert.equal(getKeys(), 'ab', 'Bars should be rendered in descending order for next data');
  });
});
