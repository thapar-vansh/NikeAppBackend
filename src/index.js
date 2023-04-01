import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { router as productRoutes } from './router/productRoutes.js'
import { router as orderRoutes } from './router/orderRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.get('/', (req, res) => {
  res.send('<h2>Hello world!</h2>')
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
