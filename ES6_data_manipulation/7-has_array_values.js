export default function hasValuesFromArray(Set, Array) {
  for (const value of Array) {
    if (!Set.has(value)) return false;
  }
  return true;
}
