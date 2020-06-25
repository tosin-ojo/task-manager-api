const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'officialblackcoders@gmail.com',
      pass: process.env.PASSWORD
    }
  })

const sendWelcomeEmail = async (email, name) => {

    const mailOptions = {
      to: email,
      from: 'officialblackcoders@gmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    }
  
    try {
      const info = await transport.sendMail(mailOptions)
    } catch (e) {
      
    }
}

const sendCancelationEmail = async (email, name) => {

  const mailOptions = {
    to: email,
    from: 'officialblackcoders@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}. I hope to see you back sometime soon.`
  }

  try {
    const info = await transport.sendMail(mailOptions)
  } catch (e) {
    
  }
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}