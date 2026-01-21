# Components

## AppRoot

Root component that sets up theming, fonts, and global styles. Wrap your entire app with this component.

```jsx
import { AppRoot } from '@spiffdog/spiffy-components';

<AppRoot>
    {/* Your app */}
</AppRoot>
```

**Features:**
- Sets up theme context
- Loads Roboto font
- Applies global CSS reset
- Configures `html { font-size: 62.5%; }` for easy rem calculations

## Button

A versatile button component with multiple appearances, variants, and sizes.

```jsx
import { Button } from '@spiffdog/spiffy-components';

<Button variant="primary" appearance="contained" size="md">
    Click Me
</Button>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `appearance`: `'solid' | 'contained' | 'elevated' | 'outline' | 'outlined' | 'basic' | 'text'` (default: `'solid'`)
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'` (default: `'md'`)
- `disabled`: `boolean`
- `busy`: `boolean` - Shows loading spinner and disables interaction
- `rounded`: `boolean` - Applies rounded corners

**Sizes:**
- `xs`: 12px font, compact padding
- `sm`: 12.6px font, compact padding
- `md`: 14.2px font (default)
- `lg`: 18px font
- `xl`: 20.2px font
- `x2`: 22.7px font

**Features:**
- ARIA attributes for accessibility (`aria-busy`, `aria-disabled`)
- Ripple effect on interaction
- Loading state with spinner
- Full keyboard navigation support

## Icon

Tree-shakable wrapper around Lucide React icons with IntelliSense support.

```jsx
import { Icon } from '@spiffdog/spiffy-components';

<Icon name="plus" size="md" />
<Icon name="chevron-right" className="text-primary" />
```

**Props:**
- `name`: Icon name (kebab-case) - see Available Icons below
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'` (default: `'md'`)
- `className`: Additional CSS classes
- All standard SVG props are supported

**Available Icons:**

Pre-registered icons (with IntelliSense support):

- **Navigation**: `chevron-right`, `chevron-left`, `chevron-down`, `chevron-up`
- **Navigation (aliases)**: `angle-right`, `angle-left`, `angle-down`, `angle-up`
- **Actions**: `plus`, `minus`, `x`, `xmark`, `check`, `check-circle`
- **Common**: `home`, `user`, `settings`, `search`, `bell`, `mail`, `heart`, `star`, `info`

**Adding New Icons:**

1. Import the icon from `lucide-react` at the top of `Icon.jsx`:
   ```jsx
   import { YourIcon } from 'lucide-react';
   ```

2. Add it to the `iconRegistry` in `Icon.jsx`:
   ```jsx
   const iconRegistry = {
       // ... existing icons
       'your-icon-name': YourIcon,
   };
   ```

3. Update the JSDoc `IconName` typedef in `Icon.jsx` (around line 96) to include your new icon name in the union type for IntelliSense support.

**Runtime Registration:**

You can also register icons at runtime (without IntelliSense):

```jsx
import { Icon } from '@spiffdog/spiffy-components';
import { CustomIcon } from 'lucide-react';

Icon.register('custom-icon', CustomIcon);
<Icon name="custom-icon" size="md" />
```

**Tree-Shaking:**

Icons are imported individually, ensuring only used icons are included in your bundle. Unused icons are automatically removed by the bundler.

**Sizes:**
- `xs`: 1.2rem (12px)
- `sm`: 1.4rem (14px)
- `md`: 1.6rem (16px) - default
- `lg`: 2rem (20px)
- `xl`: 2.4rem (24px)
- `x2`: 3.2rem (32px)

## Badge

A badge component for labels, tags, and status indicators.

```jsx
import { Badge } from '@spiffdog/spiffy-components';

<Badge variant="success" size="md">Active</Badge>
<Badge variant="alert" onClick={handleClose}>Dismissible</Badge>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `appearance`: `'solid' | 'outline' | 'basic'` (default: `'solid'`)
- `size`: `'xs' | 'sm' | 'md'` (default: `'md'`)
- `rounded`: `boolean` (default: `true`)
- `onClick`: Function - Makes badge closable with X button

**Features:**
- Closable badges with optional close button
- Size variants for dense layouts
- Uses color scale level 7 for optimal visibility

## ToggleBadge

A badge that can be toggled between selected and unselected states.

```jsx
import { ToggleBadge } from '@spiffdog/spiffy-components';

<ToggleBadge 
    variant="primary" 
    selected={isSelected}
    onClick={handleToggle}
>
    Filter Option
</ToggleBadge>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `selected`: `boolean` - Controls selected state
- `onClick`: Function - Toggle handler
- `value`: Any - Value passed to onClick handler

**Features:**
- Automatically switches between `solid` and `outline` appearance based on selection
- Perfect for filter chips and toggleable tags

## BadgeList

A container component for displaying multiple badges with overflow handling.

```jsx
import { BadgeList, Badge } from '@spiffdog/spiffy-components';

<BadgeList variant="base" size="md" bordered rounded>
    <Badge>Tag 1</Badge>
    <Badge>Tag 2</Badge>
    <Badge>Tag 3</Badge>
</BadgeList>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `size`: `'xs' | 'sm' | 'md'` (default: `'md'`)
- `bordered`: `boolean` - Shows border around the list
- `rounded`: `boolean` - Applies rounded corners

**Features:**
- Automatically handles overflow with "+N" popover
- Responsive layout that adapts to container width
- Optimized for dense layouts with size variants

## Accordion

A collapsible content section component.

```jsx
import { Accordion } from '@spiffdog/spiffy-components';

<Accordion 
    heading="Section Title" 
    variant="primary"
    size="md"
    open={isOpen}
    onHeadingClick={setIsOpen}
>
    <p>Collapsible content goes here</p>
</Accordion>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `size`: `'xs' | 'sm' | 'md'` (default: `'md'`)
- `heading`: `ReactNode` - The heading content
- `open`: `boolean` - Controls open/closed state
- `onHeadingClick`: `Function` - Callback when heading is clicked

**Features:**
- Smooth expand/collapse animation
- Size variants for dense layouts
- Color-coded borders for different variants

## AccordionList

A container for multiple accordion items.

```jsx
import { AccordionList, Accordion } from '@spiffdog/spiffy-components';

<AccordionList variant="base" size="md">
    <Accordion heading="Item 1">Content 1</Accordion>
    <Accordion heading="Item 2">Content 2</Accordion>
</AccordionList>
```

**Props:**
- `variant`: `'base' | 'primary' | 'success' | 'warning' | 'alert'` (default: `'base'`)
- `size`: `'xs' | 'sm' | 'md'` (default: `'md'`)
