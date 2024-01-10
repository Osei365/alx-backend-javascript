export default function updateUniqueItems(theMap) {
  if (theMap instanceof Map) {
    const vals = theMap.entries();
    for (const [key, value] of vals) {
      if (value === 1) {
        theMap.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
}
