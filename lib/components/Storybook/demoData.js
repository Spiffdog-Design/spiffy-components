export const demoListData = Array.from({ length: 25 }).map((_, i, a) => ({
    id: i,
    label: `v1.2.0-beta.${String(i + 1).padStart(2, '0')}`,
    selected: false,
}));
