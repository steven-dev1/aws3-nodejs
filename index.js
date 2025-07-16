import express from "express"
import fileUpload from "express-fileupload"
import { downloadFile, getFile, getFiles, uploadFile } from "./s3.js"


const app = express()
const PORT = 3000

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}))

app.get("/files", async (_req, res) => {
    const result = await getFiles()
    res.json(result.Contents)
})

app.get("/download/:fileName", async (req, res) => {
    await downloadFile(req.params.fileName)
    res.json({ success: true, message: "File downloaded successfully" })
})

app.get("/files/:fileName", async (req, res) => {
    console.log(req.params.fileName)
    const result = await getFile(req.params.fileName)
    res.json(result.$metadata)
})

app.post("/files", async (req, res) => {
    const result = await uploadFile(req.files.file)
    res.send({ success: true, message: "File uploaded successfully", result })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})