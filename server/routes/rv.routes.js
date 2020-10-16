const RvController = require("../controllers/rv.controller");

module.exports = app => {
  app.get("/api/rvs/", RvController.findAllRvs);
  app.get("/api/rvs/:id", RvController.findOneSingleRv);
  app.put("/api/rvs/update/:id", RvController.updateExistingRv);
  app.post("/api/rvs/new", RvController.createNewRv);
  app.delete("/api/rvs/delete/:id", RvController.deleteAnExistingRv);
};