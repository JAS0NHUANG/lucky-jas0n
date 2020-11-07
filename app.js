const express = require('express')
const app = express()
const port = process.env.PORT || 888

app.get('/', (req, res) => {
    res.send("Hi!")
})

app.listen(port, () => {
    console.log("Run!")
})
