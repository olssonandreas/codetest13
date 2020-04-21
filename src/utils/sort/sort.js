const compare = key => {
  return (a, b) => {
    const val1 = a[key].toLowerCase();
    const val2 = b[key].toLowerCase();

    let comparison = 0;
    if (val1 > val2) {
      comparison = 1;
    } else if (val1 < val2) {
      comparison = -1;
    }
    return comparison;
  }
};

export default (sortKey, array) => {
  if(!Array.isArray(array)) return [];

  return array.sort(compare(sortKey));
};
