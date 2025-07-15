import express from "express"
import fileUpload from "express-fileupload"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}))

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/files", (req, res) => {
    console.log(req.files)
    res.send("File uploaded successfully!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})