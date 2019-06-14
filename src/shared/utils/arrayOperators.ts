/**
 *
 * @param array : Array to sort
 * @param sortingKey : sorting key, key for which you are going to order
 */
export function sortAscArray(array: any[], sortingKey: string) {
  return array.sort((a, b) => {
    if (sortingKey === 'percentage') {
      a.percentage = a.percentage ? a.percentage : 0;
      b.percentage = b.percentage ? b.percentage : 0;
    }
    if (a[sortingKey] > b[sortingKey]) {
      return -1;
    }
    if (a[sortingKey] < b[sortingKey]) {
      return 1;
    }
    return 0;
  });
}
