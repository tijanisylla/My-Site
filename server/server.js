const express = require("express")
const chalk = require('chalk')
const app = express()
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
  
   user: process.env.MY_EMAIL,
   pass: process.env.MY_PASS,
   
 },
});
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
 let mailOptions = {
   from: `${req.body.mailerState.email}`,
   to: process.env.MY_EMAIL,
   subject: `Message from: ${req.body.mailerState.email}`,
   text: `${req.body.mailerState.message}`,
 };

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});


//======Deploying settings=====
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}


const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});
//Step 1

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     // port: 535,
//     // secure: true,
//     auth: {
//         user: process.env.MY_EMAIL , // TODO: your gmail account
//         pass: process.env.MY_PASS // TODO: your gmail password
//     }
// });

// // Step 2
// let mailOptions = {
//     from: process.env.MY_EMAIL, // TODO: email sender
//     to: 'tijani.sylla1@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer this is me testing ',
//     text: 'Wooohooo it works!'
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         console.log('Error occurs', err);
//     }else
//      console.log('Email sent!!!' );
// });

// console.log(process.env.MY_EMAIL)
// console.log(process.env.MY_PASS)

// app.listen((PORT, () => {
//     console.log(chalk.blue.bold(`Server is listening on port ${PORT}`))
// }))