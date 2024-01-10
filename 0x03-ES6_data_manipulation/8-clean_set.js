export default function cleanSet(theSet, string) {
  let res = '';
  for (const item of theSet) {
    if (string && item.startsWith(string)) {
      res = `${res}-${item.replace(string, '')}`;
    }
  }
  return res.substr(1);
}
