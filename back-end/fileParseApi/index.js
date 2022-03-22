const express = require("express");
const cors = require('cors');
const fileParserRoute = require('./routes/fileParseRoute');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();

const corsOptions = {
    origin: '*',
    optionSucessStatus: 200
};

app.use(fileUpload());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("files"));

const db = require("./models/index");


app.use('/api', fileParserRoute);



const port = process.env.PORT || 3001;
if (require.main === module) {
    //inicia o servidor
    app.listen(port, () =>  console.log(`Listening on port ${port}....`));
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
      });
}

module.exports = app