import nodemailer from "nodemailer";

const sendEmail = (email:string, code:string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
          user: process.env.NODEMAILER_EMAIL, 
          pass: process.env.NODEMAILER_PASSWORD
      }
    })

    const mailOptions = {
      to: email,
      subject: 'Email subscription verification code',
      html: `Please enter your verification code. ${code}`,
    }
    return transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}

export {sendEmail}