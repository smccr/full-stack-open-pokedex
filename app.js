/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
