const express = require("express");
const cors = require('cors');
const fileParserRoute = require('./routes/fileParseRoute');
const app = express();

const corsOptions = {
    origin: '*',
    optionSucessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json({
    limit: "20mb"
}));

app.use(express.urlencoded({
    limit: "20mb",
    extended: true
}));

app.use('/api', fileParserRoute);

const port = process.env.PORT || 3003;

module.exports = app.listen(port, () =>  console.log(`Listening on port ${port}....`));