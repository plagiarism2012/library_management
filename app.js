const express = require('express');
var cors = require("cors");
const bodyParser = require('body-parser');
const postRoute = require('./routes/book_routes');
const mongoose = require('mongoose');
require('dotenv/config');
const usersRoute = require('./routes/LibrarianRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//--------------------------------------------------------------
//Book Database
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

//---------------------------------------------------------------
//User Database

mongoose.connect(process.env.dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("DB conncected"))
  .catch(err => console.log(err));


//----------------------------------------------------------------

app.use(bodyParser.json());

app.use('/', postRoute);
app.use('/user', usersRoute);

app.get('/', (req, res) => {
  res.send('we are on home');
})

app.listen(5500);