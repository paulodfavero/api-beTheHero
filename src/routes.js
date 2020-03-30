const express = require("express");
const {
  listOng,
  createOng,
  deleteOng,
  updateOng
} = require("./controller/OngController");
const {
  listIncidents,
  createIncidents
} = require("./controller/IncidentsController");

const routes = express.Router();

routes.get("/ongs", listOng);
routes.post("/ongs", createOng);
routes.delete("/ongs", deleteOng);
routes.put("/ongs", updateOng);

routes.get("/incidents", listIncidents);
routes.post("/incidents", createIncidents);

module.exports = routes;
