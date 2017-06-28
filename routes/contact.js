
const nodemailer = require('nodemailer');

module.exports = (app) => {

    app.post('/contact', (req, res) => {
        console.log(req.body);

        sendEmail(req.body);


        res.sendStatus(200);
    });


    function sendEmail(body) {

        'use strict';

// create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: 'lcdaponte@gmail.com',
                pass: 'saluc081221'
            }
        });

// setup email data with unicode symbols
        let mailOptions = {
            from: `<body.email>`, // sender address
            to: 'lcdaponte@gmail.com', // list of receivers
            subject: 'cvnode Contact', // Subject line
            text: body.message, // plain text body
            html: body.message // html body
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

    }

};