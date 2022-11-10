export default function last(arr) {
  if (!Array.isArray(arr) || !arr.length) return;
  return arr[arr.length - 1];
}
