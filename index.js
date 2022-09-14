const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getnames, deletename, createname, updatename} = require('./controller')

app.get(`/api/names`, getnames)
app.delete(`/api/names/:id`, deletename)
app.post(`/api/names`, createname)
app.put(`/api/names/:id`, updatename)

app.listen(4004, () => console.log(`running on 4004`))