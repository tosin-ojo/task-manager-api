const nodemailer = require('nodemailer')
const { getMaxListeners } = require('../models/task')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'officialblackcoders@gmail.com',
      pass: process.env.PASSWORD
    }
  })

const sendWelcomeEmail = (email, name) => {

    const mailOptions = {
      to: email,
      from: 'officialblackcoders@gmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
         
        console.log('Email sent: ' + info.response)
      })
}

const sendCancelationEmail = (email, name) => {

  const mailOptions = {
    to: email,
    from: 'officialblackcoders@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}. I hope to see you back sometime soon.`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('Email sent: ' + info.response)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}