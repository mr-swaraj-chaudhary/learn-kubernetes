import express from 'express'
import fetch from 'node-fetch'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello!, I'm nginx app")
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url)
    res.send(response.text())
})

app.listen(PORT, () => {
    console.log(`Web server listening at port ${PORT}`)
})