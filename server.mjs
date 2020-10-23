import express from 'express'
import cors from 'cors'
import calculatorRoute from './routes/calculator.mjs'
import Chance from 'chance'

const app = express()
const chance = new Chance();

const PORT = process.env.PORT || '3000'
app.set('PORT', PORT)

let logger = function (err, req, res, next) {
  if(err) console.log(`Error: ${err}`)
  else console.log(req.url, req.method, res.statusCode)
  next()
}

app.use(cors())
app.use(logger)
app.use(express.json())

app.get('/user', (req, res) => {
  const randUser = {
    name: chance.name(),
    lastname: chance.last(),
    status: chance.string(),
    location: chance.address(),
    avatar:  chance.avatar({protocol: 'https'}),
  }
  res.send(randUser)
})
app.use('/calculator', calculatorRoute)

app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  })
})

app.listen(PORT, () => {
  console.log(
    `Server listening at http://localhost:${PORT}`,
  )
})
