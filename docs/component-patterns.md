# Component Patterns

## Consistent Props

All components follow consistent prop naming:

- **`variant`**: Color variant (`'base' | 'primary' | 'success' | 'warning' | 'alert'`)
- **`appearance`**: Visual style (component-specific)
- **`size`**: Size variant (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'`)
- **`rounded`**: Boolean for rounded corners

## Data Attributes

Components use `data-*` attributes for styling hooks:
- `data-variant`
- `data-appearance`
- `data-size`
- `data-rounded`
- `data-theme`
