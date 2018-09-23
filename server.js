const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public')) // __dirname- path to your web server

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

// app.get('/', (req, res) => {
//     //res.send('<h1>Hello Express</h1> ')
//     res.send( {
//         name: 'Abhi',
//         likes: [  
//             'Fifa',
//             'Gaming '
//         ]
//     })
// })

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome here',
    })
    
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    })
})

//@TODO 
app.get('/bad', (req, res) => {
    res.send({
        status: 404,
        error_string: 'Network error'
    })
})

app.listen(8000, () => {
    console.log('Server is up on 8000 ')
})