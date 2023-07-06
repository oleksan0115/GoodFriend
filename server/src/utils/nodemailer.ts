import nodemailer from "nodemailer";
const sendEmail = (email:string, code:string) => {  
  try {
    const transporter = nodemailer.createTransport({      
      host: 'mail.smtp2go.com',
      port: 2525,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,        
        pass: process.env.NODEMAILER_PASSWORD
      },
      tls: { 
        ciphers:'SSLv3' 
    }    
    });
    const mailOptions = {
      to: email,      
      subject: 'Email subscription verification code',
      html: `Please enter your verification code. ${code}`,    }

    transporter.verify(function(error, success) { 
      if (error) { 
              console.log(error); 
        } else { 
              console.log('Server is ready for taking our messages'); 
        } 
    });

    return transporter.sendMail(mailOptions)  
  } catch (error) {
    console.log(error)  
  }
}

export {sendEmail}