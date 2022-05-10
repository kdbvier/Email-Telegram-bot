const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "linmeng0923@gmail.com",
    pass: "successful123aaa",
  },
});

let mailDetails = {
  from: "linmeng0923@gmail.com",
  to: "kdbvier@gmail.com",
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};
const mailSend = () => {
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
module.exports = { mailSend };
