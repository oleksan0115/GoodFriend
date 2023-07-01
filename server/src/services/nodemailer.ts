import nodemailer from "nodemailer";

const sendEmail = async (email:string, code:string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { 
            user: process.env.NODEMAILER_EMAIL, 
            pass: process.env.NODEMAILER_PASSWORD
        }
      })
      console.log(process.env.NODEMAILER_EMAIL, process.env.NODEMAILER_PASSWORD)
    
      const mailOptions = {
        to: email,
        subject: 'Email subscription verification code',
        html: `Please enter your verification code. ${code}`,
      }
      await transporter.sendMail(mailOptions)
}

export {sendEmail}