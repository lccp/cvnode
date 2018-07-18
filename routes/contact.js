var sendEmail = require('../services/mailService');


module.exports = (app) => {

    app.post('/contact', (req, res) => {
        // console.log(req.body);

        sendEmail(req.body.name, req.body.email, req.body.message);


        res.sendStatus(200);
    });


};