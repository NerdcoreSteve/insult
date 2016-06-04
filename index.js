var express = require('express')  
var app = express()  
app.set('view engine', 'pug')
app.use('/public', express.static('public'))

app.set('port', (process.env.PORT || 3000))

app.get('/', function (req, res) {  
    res.render('index')
})

app.listen(app.get('port'), function() {
    // eslint-disable-next-line no-console
    console.log('Node app is running on port', app.get('port'))
})
