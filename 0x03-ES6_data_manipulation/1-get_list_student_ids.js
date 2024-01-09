export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((element) => element.id);
  }
  return [];
}
