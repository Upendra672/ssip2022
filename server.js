const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbconfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const departmentRoute = require("./routes/departmentsRoute");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/department", departmentRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listining on port ${port}`));


  
   
  
