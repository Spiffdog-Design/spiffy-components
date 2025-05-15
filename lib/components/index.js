export { default as AppRoot } from '@/components/AppRoot/AppRoot';

// -- Theme support
export { ThemeProvider, useTheme } from '@/components/Theme/ThemeProvider';
export { default as ThemeSwitcher } from '@/components/Theme/ThemeSwitcher';
export { theme } from '@/components/Theme/themes/theme.css';

// -- Base components
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion/Accordion';
export { Badge } from '@/components/Base/Badge/Badge';
export { BadgeList } from '@/components/Base/BadgeList/BadgeList';
export { Button } from '@/components/Base/Button/Button';
export { InlineDatePicker } from '@/components/Base/DatePicker/InlineDatePicker';
export { Dialog } from '@/components/Base/Dialog/Dialog';
export { FaIcon } from '@/components/Base/FaIcon/FaIcon';
export { Input } from '@/components/Base/Input/Input';
export { Label } from '@/components/Base/Label/Label';
export { CheckMenuItem, Menu, MenuItem, SubMenu } from '@/components/Base/Menu/Menu';
export { Popover } from '@/components/Base/Popover/Popover';
export { Spinner } from '@/components/Base/Spinner/Spinner';
export { Tooltip } from '@/components/Base/Tooltip/Tooltip';

// -- Grid/Datagrid/Table
export { Grid, GridItem } from '@/components/Base/Grid/Grid';

// -- Form compoennts
// export { default as Form } from '@/components/Form/Form';
export { FormInput } from '@/components/Form/Input/Input';

// -- utilities
export { createDataList } from '../utilities';
export { useHead } from '@unhead/react';
