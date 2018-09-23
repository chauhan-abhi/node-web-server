const express = require('express')
const hbs = require('hbs')

var app = express()

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public')) // __dirname- path to your web server

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1> ')
    res.send( {
        name: 'Abhi',
        likes: [  
            'Fifa',
            'Gaming '
        ]
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

//@TODO 
app.get('/bad', (req, res) => {
    res.send({
        status: 404,
        error_string: 'Network error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on 3000 ')
})