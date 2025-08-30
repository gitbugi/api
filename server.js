const express = require("express");
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const Languageroute = require("./routes/languages");
const Textroute = require("./routes/texts");
const Vocabelsroute = require("./routes/vocabels")
const userroute = require("./routes/user");

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(Languageroute);
app.use(Textroute);
app.use(userroute);
app.use(Vocabelsroute);

const listener = app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log('App is listening on port ' + listener.address().port)
})

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(
    process.env.MONGODB_URI,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

//////////////////////////////////////////////////////////////////////////////
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}