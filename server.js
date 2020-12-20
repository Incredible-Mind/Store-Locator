const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')

const PORT = process.env.PORT || 3000
app.use(express.static('public'))


app.set('views', path.join(__dirname, '/'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})
app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})