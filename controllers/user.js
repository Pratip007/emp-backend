const Employee = require('../models/user')

// get all employee
async function handelGetAllEmployees(req, res) {
    try {
        const employees = await Employee.find();
        console.log('Employees Retrieved:', );
        res.status(200).send(employees);
      } catch (err) {
        res.status(500).send(err);
      }
};


// get employee by id
async function getEmployeeById (req, res ){
    try {
        const employee = await Employee.findById(req.params.id);
        console.log('Employee Retrieved:', employee);
        if (employee) {
          res.status(200).send(employee);
        } else {
          res.status(404).send({ message: 'Employee not found' });
        }
      } catch (err) {
        res.status(500).send(err);
      }

};

//post employee
async function postEmployeeById(req, res){
    const newEmployee = new Employee(req.body);
    try {
      const savedEmployee = await newEmployee.save();
      console.log('Employee Created:', savedEmployee);
      res.status(201).send(savedEmployee);
    } catch (err) {
      res.status(400).send(err);
    }
};

// update employee 
async function updateEmployeeById(req, res){
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('Employee Updated:', updatedEmployee);
        if (updatedEmployee) {
          res.status(200).send(updatedEmployee);
        } else {
          res.status(404).send({ message: 'Employee not found' });
        }
      } catch (err) {
        res.status(500).send(err);
      }
};

//delete employee by id
async function deleteEmployeeByID( req, res){
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        console.log('Employee Deleted:', deletedEmployee);
        if (deletedEmployee) {
          res.status(200).send(deletedEmployee);
        } else {
          res.status(404).send({ message: 'Employee not found' });
        }
      } catch (err) {
        res.status(500).send(err);
      }
};

module.exports = {
    handelGetAllEmployees,
    getEmployeeById,
    postEmployeeById,
    updateEmployeeById,
    deleteEmployeeByID



}