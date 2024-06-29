const mongoose = require('mongoose');

// Define a schema and model
const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dob: String,
    gender: String,
    education: String,
    company: String,
    experience: Number,
    package: Number 
  }, { collection: 'Employee' }); // Specify the collection name here

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;