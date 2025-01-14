const express = require("express");
const {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
} = require("../controllers/student.controllers");
const {
  checkEmty,
  checkNumberClass,
} = require("../middlewares/validations/student.validation");
const routerStudent = express.Router();
// ResFul APIs
// READ ALL
routerStudent.get("/", getAllStudent);
// GET BY ID
routerStudent.get("/:id", getStudentById);
// CREATE
routerStudent.post("/", checkEmty, checkNumberClass, createStudent);
// UPDATE
routerStudent.put("/:id", updateStudent);
// DELETE
routerStudent.delete("/:id", deleteStudentById);

module.exports = routerStudent;
