import { isNullOrEmpty } from '@spiffdog/spiffy-tools';

const defaultSelectedMapFn = (item, index) => undefined;

const defaultOptions = {
    isSelected: defaultSelectedMapFn,
};

export const createDataList = (data, id, label, options = {}) => {
    const { isSelected } = { ...defaultOptions, ...options };

    return isNullOrEmpty(data)
        ? []
        : data.map((d, i) => ({
              id: d[id],
              label: d[label],
              selected: isSelected(d, i),
          }));
};
