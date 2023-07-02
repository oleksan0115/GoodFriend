module.exports = {
    apps : [{
      name: 'user.api',
      script: './server/dist/server.js',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'user.client',
      script: './client/server.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}

// NODE_ENV: 'development'
// NODE_ENV: 'production'