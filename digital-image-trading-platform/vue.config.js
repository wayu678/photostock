module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/digital-image-trading-platform/' : '/',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Adjust the target as needed
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};