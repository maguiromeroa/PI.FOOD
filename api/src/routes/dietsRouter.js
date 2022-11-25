const { Router } = require("express"); 
const { getAllDiets } = require("../controllers/allDiets");
const dietsRouter = Router();

dietsRouter.get("/", async (req, res) => {
  try {
    const diets = await getAllDiets();

    if (diets) {
      res.status(200).send(diets);
    } else {
      res.status(404).send({ message: "No diets has been found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = dietsRouter;
