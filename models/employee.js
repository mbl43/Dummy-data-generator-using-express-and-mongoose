import mongoose from 'mongoose';

const empschema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  isManager: Boolean,
  city: String,
});
const Employee = mongoose.model("Employee", empschema);

export default Employee;