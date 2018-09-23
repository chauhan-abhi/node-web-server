const express = require('express')

var app = express()

// __dirname- path to your web server
app.use(express.static(__dirname + '/public'))

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
    res.send('About page   ')
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