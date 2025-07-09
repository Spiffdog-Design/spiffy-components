export const demoListData = Array.from({ length: 50 }).map((_, i, a) => ({
    id: i,
    label: `v1.2.0-beta.${i + 1}`,
    selected: false,
}));
