const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [[{"name":"Reeakak","phoneNumber":"0876399982"},{"name":"","phoneNumber":""},{"name":"Papure","phoneNumber":"0889744411"},{"name":"qqqqqq","phoneNumber":"0878855544"}]]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts', (req, res) =>{
    res.json(contacts)
})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
