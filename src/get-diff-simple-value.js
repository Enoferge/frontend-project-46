export default (value1, value2, key) => {
  if (value2 === value1) {
    return [{ key, value: value1, sign: undefined }];
  }
  return [
    { key, value: value1, sign: false },
    { key, value: value2, sign: true },
  ];
};
