const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./app/routes/userRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
