export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((element) => {
    const score = grades
      .filter((grade) => grade.studentId === element.id)
      .map((el) => el.grade)[0];
    element['grade'] = score || 'N/A';
  });
}
