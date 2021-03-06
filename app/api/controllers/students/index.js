const { Student } = require('../../../models');

const attachStudent = (obj) => {
  const student = [];
  obj.studentId.forEach((id) => {
    try {
      student.push(Student.getById(id));
    } catch (error) {
      student.push('unknown');
    }
  });
  const item = Object.assign({}, obj, { student });
  delete item.studentId;
  return item;
};

const isStudentExist = (studentId) => {
  studentId.forEach(s => Student.getById(s));
};

module.exports = {
  attachStudent,
  isStudentExist,
};
