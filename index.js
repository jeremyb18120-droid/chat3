
/**Importation des librairies */
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
db.sequelize.sync();


const app = express();
/** protéger le web service */
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  };
app.use(cors(corsOptions));
/**middleware */
// parser les requêtes: content-type - application/json
app.use(express.json());
// parser les requêtes: content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome in messageAPI." });
});

// Configuration du serveur Web (choix du port)
const PORT = 3000;
require("./app/routes/messages.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
