export default function getListStudentIds(thingArray) {
  if (!Array.isArray(thingArray)) {
    return []
  }
  return thingArray.map(student => student.id);
}
