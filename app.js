//we use express.js to simply host server side
const express = require('express');

//we use node inside module path to set pathing
const path = require('path');

//import function
const importFunc = require('./func');

const app = express();

const port = process.env.PORT || 3000;

//set engine to view - we use hbs
app.set('view engine', 'hbs');

//set global styles from '/assets' - use path.join to concat root folder/assets
app.use('/assets', express.static(path.join(__dirname,'/assets')))
app.use('/js', express.static(path.join(__dirname,'/js')))

//set respond on '/' path
app.get('/', (req, res) => {
  res.render('index', {

    //object with paramethers
    pageTitle: 'Lekcja NodeJS 25.04',
    score: importFunc.sum(3, 4),
    subTitle: importFunc.someTitle,
  })
})

//set respond on '/portfolio' path
app.get('/portfolio', (req, res) => {
  res.render("portfolio")
})


//set server listening on port
app.listen(port, (err) => {
  console.log('Server ist listening on port: ' + port);
  if (err) return console.log("Bład serwera", err)
});