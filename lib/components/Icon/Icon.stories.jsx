import { action } from 'storybook/actions';

import { Icon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { Accordion } from '../Accordion/Accordion';

const meta = {
    title: 'Base/Icon',
    component: Icon,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        set: {
            options: ['regular', 'solid'],
            control: { type: 'radio' },
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2', 'x3', 'x4'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        set: 'solid',
        name: 'trash-can',
        size: 'md',
    },

    render: (args) => {
        return (
            <ThemeWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Icon {...args} />
                    <Accordion heading="Usage Instructions">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <p>
                                This library imports{' '}
                                <a
                                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                                    target="_blank"
                                >
                                    Font Awesome v6.7.2 CSS
                                </a>{' '}
                                reference as the default icon library.
                            </p>
                            <p>
                                Go to{' '}
                                <a href="https://fontawesome.com/v6/search?ic=free" target="_blank">
                                    Font Awesome v6 Search
                                </a>{' '}
                                and locate a <em>FREE</em> icon you wish to import. Then use the icon's class name
                                values to populate the <code>set</code> and <code>name</code> values of the component.
                            </p>
                            <p>
                                For example, if you wish to import the shopping cart icon:
                                <br />
                                <code>&lt;i class="fa-solid fa-cart-shopping" /&gt;</code>
                            </p>
                            <p>
                                Simply set the props like this:{' '}
                                <code>&lt;Icon set="solid" name="cart-shopping" /&gt;</code>
                            </p>
                            <p>
                                This would be the result: <Icon set="solid" name="cart-shopping" />
                            </p>
                            <div>
                                <strong>Special note about sizing:</strong>
                                <p>
                                    While you may use any valid css font-size rule value with the <code>size</code> prop
                                    (i.e. <code>20px</code> or <code>0.850rem</code>), it is recommended to use one of
                                    the values in the panel below. This is to maintain visual consistency.
                                </p>
                            </div>
                            <p>Use the panel below to test props settings.</p>
                        </div>
                    </Accordion>
                </div>
            </ThemeWrapper>
        );
    },
};
