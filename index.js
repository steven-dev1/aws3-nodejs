import express from "express"
import fileUpload from "express-fileupload"
import { getFiles, uploadFile } from "./s3.js"


const app = express()
const PORT = 3000

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}))

app.get("/files", async (req, res) => {
    const result = await getFiles()
    res.json(result.Contents)
})

app.post("/files", async (req, res) => {
    const result = await uploadFile(req.files.file)
    res.send({ success: true, message: "File uploaded successfully", result })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})