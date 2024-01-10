export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((element) => {
    const score = grades.filter((grade) => grade.studentId === element.id);
    if (score.length > 0) {
      element['grade'] = score[0].grade;
    } else {
      element['grade'] = 'N/A';
    }
  });
}
