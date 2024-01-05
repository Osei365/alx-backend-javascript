export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = nm;
    }
  }

  get length() {
    return this._length;
  }

  set length(lt) {
    if (typeof lt !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = lt;
    }
  }

  get students() {
    return this._students;
  }

  set students(student) {
    if (!Array.isArray(student)) {
      throw new TypeError('Students must be an array of strings');
    } else if (!student.every((i) => typeof i === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = student;
  }
}
