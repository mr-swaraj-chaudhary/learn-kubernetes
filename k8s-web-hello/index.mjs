import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send(`Hello!, I'm ${os.hostname()}`)
})

app.get("/author", (req, res) => {
    res.send(`Hello!, I'm Swaraj Kumar`)
})

app.get("/system-info", (req, res) => {
    res.send(`
        <p>
            Endianness of system: ${os.endianness()} <br>
            OS name: ${os.type()} <br>
            OS platform: ${os.platform()} <br>
            OS release: ${os.release()} <br>
            CPU architecture: ${os.arch()} <br>
            Free memory: ${os.freemem()} <br>
            Total memory: ${os.totalmem()} <br>
            OS default directory for temp files: ${os.tmpdir()}
        </p>
    `)
})

app.listen(PORT, () => {
    console.log(`Web server listening at port ${PORT}`)
})