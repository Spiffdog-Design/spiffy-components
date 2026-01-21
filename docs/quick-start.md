# Quick Start

## 1. Wrap your app with AppRoot

The `AppRoot` component sets up theming, fonts, and global styles:

```jsx
import { AppRoot } from '@spiffdog/spiffy-components';

function App() {
    return (
        <AppRoot>
            {/* Your app content */}
        </AppRoot>
    );
}
```

## 2. Use components

```jsx
import { Button, Badge, Icon } from '@spiffdog/spiffy-components';

function MyComponent() {
    return (
        <div>
            <Button variant="primary" size="md">
                <Icon name="plus" size="sm" />
                Add Item
            </Button>
            <Badge variant="success">Active</Badge>
        </div>
    );
}
```
