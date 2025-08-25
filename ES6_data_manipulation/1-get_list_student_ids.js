export default function getListStudentIds(thingArray) {
  if (!Array.isArray(thingArray)) {
    return []
  }
  return list.map(student => student.id);
}
