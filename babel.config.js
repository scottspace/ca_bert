module.exports = {
  module: { 
    rules: [
      {
        test: /\.txt$/,
        use: [
          'raw-loader'
        ]
      }
    ]
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
