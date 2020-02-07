const express = require('express')

const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

//first argument is an route

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})


app.listen(3000);


//npm start (script from node)
//npm run something(customized scripts)
//npm install (third party packages)
//we can install packages for development or production .. like nodemon, its only for development
//--save-dev
//-g we'll not install it in this project put globally on your machine