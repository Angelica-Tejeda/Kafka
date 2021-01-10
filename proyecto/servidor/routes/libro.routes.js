module.exports = app => {
  const libro = require("../controllers/libro.controller.js");

  // Create a new Libro
  app.post("/libro", libro.create);

  // Retrieve all Libro
  app.get("/libro", libro.findAll);

  // Retrieve a single Customer with customerId
  //app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  //app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  //app.delete("/customers/:customerId", customers.delete);

  // Delete Customers
  //app.delete("/customers", customers.deleteAll);
};
