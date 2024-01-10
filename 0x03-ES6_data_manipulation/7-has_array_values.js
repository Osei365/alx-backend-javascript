export default function hasValuesFromArray(theSet, theArray) {
  return theArray.every((element) => theSet.has(element));
}
