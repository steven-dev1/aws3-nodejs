import express from "express"
import fileUpload from "express-fileupload"
import { downloadFile, getFile, getFiles, getSignedUrlForFile, uploadFile } from "./s3.js"


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
    const result = await getSignedUrlForFile(req.params.fileName)
    console.log(result)
    res.json(result)
})

app.post("/files", async (req, res) => {
    const result = await uploadFile(req.files.file)
    res.send({ success: true, message: "File uploaded successfully", result })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})