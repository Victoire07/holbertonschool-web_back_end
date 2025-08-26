export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentsInCity = listStudents.filter((student) => student.location === city);

  const studentsWithGrades = studentsInCity.map((student) => {
    const found = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    const grade = found ? found.grade : 'N/A';
    return { ...student, grade };
  });

  return studentsWithGrades;
}
