export const getVariantMainColor = (variant, theme) => {
    const code = variant === 'warning' ? 11 : variant !== 'base' ? 10 : 12;
    return theme.colors.solid[variant][code];
};
