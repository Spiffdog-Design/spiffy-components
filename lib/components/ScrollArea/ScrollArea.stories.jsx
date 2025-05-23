import { Button, FaIcon, Popover, ScrollArea } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { theme } from '@/components/Theme/themes/theme.css';

const meta = {
    title: 'Base/ScrollArea',
    component: ScrollArea,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;

export const Demo = {
    render: () => {
        const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${i + 1}`);
        return (
            <ThemeWrapper>
                <Popover
                    showHeader={false}
                    padded={false}
                    trigger={
                        <Button appearance="basic" rounded={true}>
                            Open Scroll Popover <FaIcon name="caret-right" />
                        </Button>
                    }
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1rem',
                            height: 250,
                            width: 250,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <ScrollArea>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 8,
                                    padding: 12,
                                    color: theme.colors.solid.base[11],
                                }}
                            >
                                {TAGS.map((tag) => (
                                    <div key={tag}>{tag}</div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </Popover>
            </ThemeWrapper>
        );
    },
};
