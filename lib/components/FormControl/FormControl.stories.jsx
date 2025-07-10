import { action } from '@storybook/addon-actions';

import { Checkbox, Input, FormControl, Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useState } from 'react';

const meta = {
    title: 'Base/Form/FormControl',
    component: FormControl,
    argTypes: {
        compact: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Default = {
    args: {
        compact: false,
    },
    render: ({ checked, ...args }) => {
        const [formData, setFormData] = useState({});

        const handleChange = (id) => (arg) => {
            const newData = { ...formData, [id]: arg };
            setFormData(newData);
            action('changed')(newData);
        };

        return (
            <ThemeWrapper>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 16 }}>
                    <FormControl>
                        {(id) => [
                            <Label htmlFor={id}>Enable Joshua's access</Label>,
                            <Checkbox
                                id={id}
                                onChange={handleChange('joshua')}
                                checked={formData['joshua']}
                                {...args}
                            />,
                        ]}
                    </FormControl>
                    <FormControl>
                        {(id) => [
                            <Label htmlFor={id}>Enable Nathaniel's access</Label>,
                            <Checkbox
                                id={id}
                                onChange={handleChange('nathaniel')}
                                checked={formData['nathaniel']}
                                {...args}
                            />,
                        ]}
                    </FormControl>
                    <FormControl>
                        {(id) => [
                            <Label htmlFor={id}>Enable Joe's access</Label>,
                            <Checkbox id={id} onChange={handleChange('joe')} checked={formData['joe']} {...args} />,
                        ]}
                    </FormControl>
                    <FormControl>
                        {(id) => [
                            <Label htmlFor={id} required>
                                Who's your daddy?
                            </Label>,
                            <Input
                                id={id}
                                compact={true}
                                onChange={handleChange('daddy_name')}
                                value={formData['daddy_name']}
                                {...args}
                            />,
                        ]}
                    </FormControl>
                </div>
            </ThemeWrapper>
        );
    },
};
