const authRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const utils = require('../utils/utils')

const JWT_SECRET = process.env.SECRET_KEY
const REDIRECT_URI = process.env.REDIRECT_URI
const SCOPE = 'user-library-read user-read-recently-played user-top-read user-follow-read user-read-email user-read-private'

authRouter.get('/login', (req, res) => {
  const responseType = 'code'
  const state = utils.genRandomString(16)

  // Sign the state into a JWT and send it as a query parameter to the oAuth flow
  const token = jwt.sign({ state }, JWT_SECRET, { expiresIn: '5m'})

  const spotifyAuthUrl = 'https://accounts.spotify.com/authorize?'
    + `response_type=${responseType}&`
    + `client_id=${process.env.CLIENT_ID}&`
    + `scope=${SCOPE}&`
    + `redirect_uri=${REDIRECT_URI}&`
    + `state=${token}`

  
  res.redirect(spotifyAuthUrl)
})

authRouter.get('/callback', async (req, res) => {
  const { state, code } = req.query

  try {
    // If the JWT has been tampered with verifying it will throw an error and we will know the state is invalid
    const decoded = jwt.verify(state, JWT_SECRET)
    const originalState = decoded.state

  }
  catch (error) {
    return res.status(403).json({
      error: 'Unauthorized',
      message: 'State mismatch or invalid'
    })
  }

  try {
    const { accessToken, refreshToken} = await utils.getTokens(code)

    if(!accessToken || !refreshToken) {
      throw new Error('Invalid token')
    }

    const jwtToken = jwt.sign({ accessToken: accessToken }, JWT_SECRET, { expiresIn: '1h'})

    res.redirect(`/analytics/top-tracks?token=${jwtToken}`)
  }
  catch (error) {
    return res.status(403).json({
      error: 'Unauthorized', 
      message: 'An error occurred during token retrieval'
    })
  }
})

module.exports = authRouter