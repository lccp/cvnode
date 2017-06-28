
var nodemailer = require('nodemailer');

module.exports = (app) => {

    app.post('/contact', (req, res) => {
        console.log(req.body);

        sendEmail(req.body);


        res.sendStatus(200);
    });


    function sendEmail(body) {

        let name = body.name;
        let from = body.email;
        let message = body.message;
        let to = 'lcdaponte@gmail.com';

        var transporte = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'lcdaponte@gmail.com',
                pass: 'saluc081221'
            }
        });

        var email = {
            from: from,
            to: to,
            subject: 'New Message from cvnode!',  // Um assunto bacana :-)
            html: 'Nome:' + name +'<br/>' + 'Email:' + from + '<br/>' + 'Mensagem:' + message // O conteúdo do e-mail
        };

        transporte.sendMail(email, function(err, info){
            if(err)
                throw err; // Oops, algo de errado aconteceu.

            console.log('Email enviado! Leia as informações adicionais: ', info);
        });

    }
};