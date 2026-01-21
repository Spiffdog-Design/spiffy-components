# Best Practices

## For Data-Dense Dashboards

1. **Use compact sizes**: Prefer `xs` and `sm` sizes for buttons and badges
2. **Tight spacing**: Use smaller spacing tokens (`--spacing-gap-1`, `--spacing-padding-1`)
3. **Smaller fonts**: Consider reducing base font size for dense layouts
4. **Size variants**: Use size props consistently across components

## For Forms

1. **Consistent sizing**: Use `md` size as default for form controls
2. **Accessible targets**: Ensure minimum 24px touch targets
3. **Clear feedback**: Use variant colors for validation states
4. **Loading states**: Use `busy` prop on buttons during form submission

## Color Usage Guidelines

- **Buttons (solid/contained)**: Use color scale level `-10`
- **Badges (solid)**: Use color scale level `-7`
- **Borders/Outlines**: Use color scale level `-6` or `-7`
- **Text on colored backgrounds**: Use `-1` or `-12` depending on contrast
