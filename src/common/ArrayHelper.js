export const first = (array, predicate) => {
  const items = array.filter(predicate);
  if (items) return items[0];
  return null;
};
