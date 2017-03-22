require('./config/config');
var app = require('./config/express');

const port = process.env.PORT;


app.listen(port, () => {
   console.log(`Server started on port: ${port}`);
});