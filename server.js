const express = require("express");
const Languageroute = require("./routes/languages");
const Textroute = require("./routes/texts");
const app = express();
const helmet = require('helmet');
const compression = require('compression');

app.use(express.json());
app.use(Languageroute);
app.use(Textroute);
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