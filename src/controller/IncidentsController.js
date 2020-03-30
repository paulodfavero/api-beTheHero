const connection = require("../database/connection");

module.exports = {
  async listIncidents(req, res) {
    try {
      const incidents = await connection("incidents").select("*");
      return res.json(incidents);
    } catch (erro) {
      console.log("ERRO TO GET LIST FROM INCIDENTS", error);
      return res.status(404).json(error);
    }
  },
  async createIncidents(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    try {
      const [id] = await connection("incidents").insert({
        title,
        description,
        value
      });
      return res.json({ id });
    } catch (error) {
      console.log("ERROR TO CREATE INCIDENTS", error);
      return res.status(401).json(error);
    }
  }
};
