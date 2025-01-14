const { where } = require("sequelize");
const { Student } = require("../model");

//  data
let studentList = [
  {
    id: "1231335356",
    fullName: "Nguyễn Văn Bưởi",
    age: 17,
    numberClass: 11,
  },
  {
    id: "12312576657",
    fullName: "Trần Thị Chuối",
    age: 15,
    numberClass: 9,
  },
  {
    id: "1231234575645",
    fullName: "Lê Thị Mận",
    age: 18,
    numberClass: 12,
  },
];
const getALl = async () => {
  const studentList = await Student.findAll();

  if (studentList) {
    return studentList;
  } else {
    return "Not Found!";
  }
};
const getById = async (id) => {
  const student = await Student.findAll({
    where: {
      id,
    },
  });

  console.log(student);

  if (student) {
    return student;
  } else {
    return false;
  }
};
const create = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};
const update = async (id, list) => {
  // const index = studentList.findIndex((student) => student.id === id);
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    (student.fullName = list.fullName),
      (student.age = list.age),
      (student.numberClass = list.numberClass);
    student.save();
    return student;
  } else {
    return null;
  }
};

const deleteById = async (id) => {
  const student = await getById(id);
  if (student) {
    await Student.destroy({
      where: {
        id,
      },
    });
    return student;
  } else {
    return false;
  }
};
module.exports = { getALl, getById, create, update, deleteById };
