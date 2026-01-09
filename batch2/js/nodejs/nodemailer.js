const nodemailer = require('nodemailer');
// Setup transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vamsipaidi25@gmail.com',
    pass: 'lhkk mdot evhz npvr' // Use Gmail App Password
  }
});

// Email options
let mailOptions = {
  from: 'vamsipaidi25@gmail.com',
  to: 'paidivamsi43@gmail.com',
  subject: 'Node.js Email Example',
  text: 'Hello! This is a test email from Node.js'
};

// Send email
for(let i=0;i<=5;i++){
    transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
}
