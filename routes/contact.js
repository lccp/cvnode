module.exports = (app) => {

    app.post('/contact', (req, res) => {
        res.render('index.hbs');
    });

};