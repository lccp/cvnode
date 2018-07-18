var nodemailer = require('nodemailer');


const sendEmail = (name, email, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'lucascavalcantecv@gmail.com',
               pass: 'saluc!@#4'
           }
       });

    const mailOptions = {
    from: email, // sender address
    to: 'lucascavalcantecv@gmail.com', // list of receivers
    subject: `Contact - ${name}`, // Subject line
    html: `<p>
            Name: ${name}
            Email: ${email}
            Message: ${message}
            </p>`// plain text body
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}

module.exports = sendEmail;