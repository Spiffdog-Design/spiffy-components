export const isNullOrEmpty = (value) => {
    return value == null || (value.length != null && value.length === 0);
};
