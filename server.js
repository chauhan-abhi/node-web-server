const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
var app = express()

const port = process.env.PORT || 8000

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

// next used to tell express when done-- > call next()
app.use((req, res, next) => {
    var now = new Date().toString()
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log')
          }
    })
    next()
})

/************Middleware Applications **********/
/***** -> to chk api req is authenticated*/
/***** -> db req check if user is valid or not *****/


// Site under maintenace code with middleware
// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// })

// this middleware serves upto a directory
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

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    })
})

//@TODO 
app.get('/bad', (req, res) => {
    res.send({
        status: 404,
        error_string: 'Network error'
    })
})

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})