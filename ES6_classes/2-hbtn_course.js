export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != 'string') {
        throw new TypeError("name must be a string")
    }
    if (typeof length != 'number') {
        throw new TypeError('length must be a number')
    }
    if (Array.isArray(students) || array.every(item => typeof item === 'string')) {
        throw new TypeError("students must be an array of strings")
    }
  }
  
}
