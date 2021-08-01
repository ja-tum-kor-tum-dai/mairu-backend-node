import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { messageData } from './data/message'

const PORT = process.env.PORT || 5555
const app: Application = express()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    status: 'success',
    response:
      'Please go to https://github.com/ja-tum-kor-tum-dai/mairu-backend-node for API usage.',
  })
})

app.all('/random', (req: Request, res: Response) => {
  const quote = messageData[Math.floor(Math.random() * messageData.length)]
  res.status(200).send({
    status: 'success',
    response: {
      quote: quote,
    },
  })
})

app.all('*', (req: Request, res: Response) => {
  res.status(404).send({
    status: 'failure',
    response: 'route not found.',
  })
})

app.listen(PORT, () => console.log('Server running at port %d', PORT))
