import { newSpecPage } from '@stencil/core/testing';
import { SButton } from './s-button';

describe('s-button', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [SButton],
            html: `<s-button>Plop</s-button>`,
        });
        expect(page.root).toEqualHtml(`
            <s-button>
                <button>
                    Plop
                </button>
            </s-button>
        `);
    });
});
