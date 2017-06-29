
var sendEmail = require('nodemailer');

module.exports = (app) => {

    app.post('/contact', (req, res) => {
        console.log(req.body);

        //sendEmail(req.body);


        res.sendStatus(200);
    });


};