import { newSpecPage } from '@stencil/core/testing';
import { SButtonGroup } from './s-button-group';

describe('s-button-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [SButtonGroup],
            html: `<s-button-group></s-button-group>`,
        });
        expect(page.root).toEqualHtml(`
      <s-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-button-group>
    `);
    });
});
