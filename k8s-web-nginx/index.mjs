import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello!, I'm nginx app")
})

app.get("/nginx", async (req, res) => {
    const url = 'https://www.nginx.com/'
    const response = await fetch(url)
    res.send(response.text())
})

app.listen(PORT, () => {
    console.log(`Web server listening at port ${PORT}`)
})