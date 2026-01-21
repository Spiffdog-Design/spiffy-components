# Theming

## Theme Provider

The library uses a theme provider system for consistent theming across components.

```jsx
import { ThemeProvider } from '@spiffdog/spiffy-components';

<ThemeProvider themeName="light">
    {/* Your app */}
</ThemeProvider>
```

## Dark Theme Support

Dark theme is automatically handled by `@spiffdog/spiffy-colors`. The color palette automatically inverts based on system preference using `@media (prefers-color-scheme: dark)`.

No additional configuration needed - components automatically adapt to dark mode!

## Customizing Themes

You can customize the theme by overriding CSS custom properties:

```css
:root {
    --font-size-base: 1.4rem; /* Compact mode for dense layouts */
    --spacing-unit: 0.3rem; /* Tighter spacing */
}
```
