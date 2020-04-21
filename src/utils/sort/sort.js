
const compare = key => {
  return (a, b) => {
    const name1 = a[key].toLowerCase();
    const name2 = b[key].toLowerCase();

    let comparison = 0;
    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }
};

export default (sortKey, array) => {
  if(!Array.isArray(array)) return [];

  const sortedArray = array.sort(compare(sortKey));
  return sortedArray;
};
