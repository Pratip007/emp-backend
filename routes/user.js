const express = require('express');
const conrollers = require('../controllers/user')
const router = express.Router();

  
  
 // route at "/" 
  router.route('/')
  // Read
  .get(conrollers.handelGetAllEmployees)
  // Create
  .post(conrollers.postEmployeeById);
  
  // route at "/:id"
  router.route('/:id')
  // Read by id
  .get( conrollers.getEmployeeById)
  // Update
  .put( conrollers.updateEmployeeById)
  // Delete
  .delete(conrollers.deleteEmployeeByID);
 
  module.exports = router;