require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, './.env'),
        systemvars: true
      })
    ]

    return config
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    postUrl: `http://jsonplaceholder.typicode.com/posts`
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    postUrl: `http://jsonplaceholder.typicode.com/posts`
  }
}