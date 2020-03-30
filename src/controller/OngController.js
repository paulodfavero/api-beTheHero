const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async listOng(req, res) {
    try {
      const ongs = await connection("ongs").select("*");
      return res.json(ongs);
    } catch (error) {
      console.log("ERRO TO GET LIST FROM ONGS", error);
      return res.status(404).json(error);
    }
  },
  async createOng(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");
    try {
      await connection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });
      return res.json({ id });
    } catch (error) {
      console.log("ERROR TO CREATE ONGS", error);
      return res.status(401).json(error);
    }
  },
  async deleteOng(req, res) {
    const { id } = req.body;
    try {
      await connection("ongs")
        .delete()
        .where({ id });
      return res.json({ success: "Deletado com Sucesso" });
    } catch (error) {
      return res.json(error);
    }
  },

  async updateOng(req, res) {
    const { id, name, email, whatsapp, city, uf } = req.body;
    try {
      await connection("ongs")
        .update({
          name,
          email,
          whatsapp,
          city,
          uf
        })
        .where({ id });
      return res.json({ success: `id ${id} atualizado com sucesso` });
    } catch (error) {
      return res.json(error);
    }
  }
};
