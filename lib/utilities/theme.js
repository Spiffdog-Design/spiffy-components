export const getVariantMainColor = (variant) => {
    const code = variant === 'warning' ? 11 : variant !== 'base' ? 10 : 12;
    return `var(--${variant}-${code})`;
};
