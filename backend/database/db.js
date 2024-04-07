const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/SchoolManagementSystem');

const student= new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    rollno: Number,
    mobileno: Number

})
const teacher= new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    id: Number,
    mobileno: Number

})
const schoolData= new mongoose.Schema({
    class: String,
    subjects: {
        sub1: String,
        sub2: String,
        sub3: String,
        sub4: String,
        sub5: String,
    }

})

const Student = mongoose.model("Student",student);
const Teacher = mongoose.model("Teacher",teacher);
const SchoolData = mongoose.model("SchoolData",schoolData);

module.exports={
    Student,
    Teacher,
    SchoolData
}