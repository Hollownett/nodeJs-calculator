import express from 'express'
import calculator from '../controllers/calculator.mjs'

const router = express.Router()

router
  .get('/add/', calculator.add)
  .get('/multiplication/', calculator.multiplication)
  .get('/division/', calculator.division)
  .get('/minus/', calculator.minus)

export default router
