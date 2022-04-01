// server config
const express = require('express')
const app = express()
require('dotenv').config()
require('express-async-errors')
// db config
const connectDB = require('./db/connect')
// routers config
const productsRouter = require('./routes/products')
// cutom middlewares config
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middlewares
app.use(express.json())

// products routes
app.use('/api/v1/products', productsRouter)

// custom middlewares
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// server and db initiation
const port = process.env.PORT || 3000
const start = async () => {
  try {
    // connect db
    await connectDB(process.env.MONGO_URI)
    console.log(`DB connected successfuly...`)
    // run server
    app.listen(port, () => console.log(`Server is listing on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

// start app
start()