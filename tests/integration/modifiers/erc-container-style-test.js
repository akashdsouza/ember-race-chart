import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | erc-container-style', function(hooks) {
  setupRenderingTest(hooks);

  test('without child element', async function(assert) {
    await render(hbs`<div {{erc-container-style}} data-test-container></div>`);
    assert.dom('[data-test-container]').hasStyle({
      height: '0px'
    }, 'height shouldn\'t be set if there are no child elements');
  });

  test('count is not set', async function(assert) {
    await render(hbs`<div {{erc-container-style}} data-test-container><div>Test</div></div>`);
    assert.dom('[data-test-container]').hasStyle({
      height: '0px'
    }, 'height shouldn\'t be set if count is zero');
  });

  test('computed height', async function(assert) {
    await render(hbs`
      <div {{erc-container-style count=10 space=10}} data-test-container>
        <div style="height: 10px"></div>
      </div>
    `);
    assert.dom('[data-test-container]').hasStyle({
      height: '200px'
    }, 'height should be computed correctly');
  });
});
