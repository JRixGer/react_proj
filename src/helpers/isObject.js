export default value => value !== null &&
  value !== undefined &&
  typeof value === 'object' &&
  (
    value.constructor === Object
    || value.constructor === null
    || value.constructor === undefined
  );
