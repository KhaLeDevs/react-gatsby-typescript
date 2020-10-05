import { searchData } from '@src/contants/data';

export const getSearchResults = (keyword: string, _level: number) => {
  return searchData
    .map(dataRow => {
      const { content, link } = dataRow;
      let keyDescription;
      let keyDescription_before;
      let keyDescription_after;
      let result,
        keyIndexList = [];
      let regex = new RegExp(keyword, 'gi');
      while ((result = regex.exec(content))) {
        keyIndexList.push(result.index);
      }

      return keyIndexList.map(keyIndex => {
        keyDescription = content.slice(keyIndex, keyIndex + keyword.length);
        if (keyIndex >= 70) {
          keyDescription_before = content.slice(keyIndex - 70, keyIndex);
          keyDescription_after = content.slice(
            keyIndex + keyword.length,
            keyIndex + keyword.length + 80
          );
        } else {
          keyDescription_before = content.slice(0, keyIndex);
          keyDescription_after = content.slice(
            keyIndex + keyword.length,
            keyIndex + keyword.length + 100
          );
        }

        return {
          description: keyDescription,
          descriptionBefore: keyDescription_before,
          descriptionAfter: keyDescription_after,
          link,
        };
      });
    })
    .filter(arr => !!arr.length)
    .reduce((_accumulator, currentValue, _currentIndex, _array) => {
      return [...currentValue];
    }, []);
};
