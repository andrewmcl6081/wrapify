const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const authRouter = require('./controllers/controller.auth')
const queryRouter = require('./controllers/controller.queries')
const path = require('path')

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173'
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'dist')))

// Logging middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/api/auth', authRouter)
app.use('/api/query', queryRouter)

app.get('/', (req, res) => {
  res.send("hello world")
})

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app