function isEmpty(value) {
  switch (typeof value) {
    case "string":
      return !value.length;
    case "object":
      return value === null || !(Object.keys(value).length || value.size);
    default:
      return true;
  }
}
