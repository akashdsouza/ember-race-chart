import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | erc-bar-style', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
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
    `);

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
