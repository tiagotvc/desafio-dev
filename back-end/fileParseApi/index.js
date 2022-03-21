const express = require("express");
const cors = require('cors');
const fileParserRoute = require('./routes/fileParseRoute');
const bodyParser = require('body-parser');
const app = express();

const db = require("./models/index");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

const corsOptions = {
    origin: '*',
    optionSucessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("files"));

/* app.use(express.json({
    limit: "20mb"
}));

app.use(express.urlencoded({
    limit: "20mb",
    extended: true
})); */

app.use('/api', fileParserRoute);

const port = process.env.PORT || 3003;

module.exports = app.listen(port, () =>  console.log(`Listening on port ${port}....`));