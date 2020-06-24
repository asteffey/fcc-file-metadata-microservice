import { Router } from 'express'
import fileUpload, { UploadedFile } from 'express-fileupload'

const fileAnalyse = Router()

fileAnalyse.use(fileUpload())

fileAnalyse.post('/', ({ files }, res) => {
  if (!files?.upfile || Array.isArray(files?.upfile)) {
    res.status(400)
    res.send('Bad Request')
  }

  const { name, mimetype, size } = files?.upfile as UploadedFile
  res.json({
    name,
    type: mimetype,
    size
  })
})

export default fileAnalyse
