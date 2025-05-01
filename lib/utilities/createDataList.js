import { isNullOrEmpty } from './isNullOrEmpty';

export const createDataList = (data, id, label) => {
    return isNullOrEmpty(data) ? [] : data.map((d) => ({ id: d[id], label: d[label] }));
};
