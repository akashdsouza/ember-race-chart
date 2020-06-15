import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | erc-bar-container-style', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    await render(hbs`
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
    `);
    assert.dom('[data-test-bar-container]').hasStyle({
      transitionDuration: '0.5s',
      height: '10px',
      top: '20px'
    });
  });
});
