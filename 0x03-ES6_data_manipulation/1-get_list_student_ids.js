export default function getListStudentIds (arr) {
  if (typeof arr !== "array") {
    return [];
  }
  return arr.map((element) => {
    element.id;
  });
}
