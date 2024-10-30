import mongoose from "mongoose";

// Define the student schema
const studentSchema = new mongoose.Schema({
  rollNo: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  fatherName :{
    type :String,
    required:true,
    trim :true,

  },
  motherName :{
    type :String,
    required:true,
    trim :true,

  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

// Create the student model
const Student = mongoose.model("Student", studentSchema);

// Export the model as default
export default Student;
