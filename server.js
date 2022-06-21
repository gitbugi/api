const express = require("express");
const Languageroute = require("./routes/languages");
const Textroute = require("./routes/texts");
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const userroute = require("./routes/user");

app.use(cors({ origin: '*' }))

app.use(express.json());
app.use(Languageroute);
app.use(Textroute);
app.use(userroute);
app.use(helmet());
app.use(compression());

const listener = app.listen(process.env.PORT || 3000, () => {
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