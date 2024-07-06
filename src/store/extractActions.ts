// P.S. Automatic actions retrieval dont work for now
export const extractActions = (slice: any) => {
  return Object.keys(slice)
    .filter((key) => key !== 'default' && typeof slice[key] === 'function')
    .reduce((acc: any, key) => {
      acc[key] = slice[key];
      return acc;
    }, {});
};
