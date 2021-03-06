const express = require('express')
const app = express()
const port = 3003
const data = require('./data.json')

app.use(express.static('./public'))

app.get('/data', (req, res, next) => {
    res.status(200).send({
        message: 'success',
        data: data
    })
})

app.listen(port, () => console.log(`Porty on port ${port}`))

app.get('/:tag', (req, res, next) => {
    res.status(200).send(req.params.tag)
})