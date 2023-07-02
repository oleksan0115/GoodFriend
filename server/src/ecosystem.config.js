module.exports = {
    apps : [{
      name: 'user.api',
      script: 'server.js',
      env: {
        NODE_ENV: 'production'
      }
    }]
}

// NODE_ENV: 'development'
// NODE_ENV: 'production'