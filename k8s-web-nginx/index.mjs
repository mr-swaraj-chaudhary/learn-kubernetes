import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send(`Hello!, I'm ${os.hostname()}`)
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url)
    const body = await response.text()
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`Web server listening at port ${PORT}`)
})