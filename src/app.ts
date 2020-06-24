import cors from 'cors'
import express from 'express'
import fileAnalyse from './routes/fileanalyse'

const app = express()

app.use(cors({ optionsSuccessStatus: 200 }))

app.use(express.static('public'))

app.use('/api/fileanalyse', fileAnalyse)

export default app
