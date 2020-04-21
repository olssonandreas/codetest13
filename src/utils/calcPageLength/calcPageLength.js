export default (items, pageSize) => {
  if(!items) return 0;

  if(items <= 10) return 1;

  return Math.ceil(items/pageSize);
}
