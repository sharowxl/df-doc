module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': '@df_scope/df-ui',
        'styleLibraryName': 'theme-chalk'
      },
      'df-ui'
    ],
    [
      'component',
      {
        'libraryName': '@df_scope/df-bui',
        'styleLibraryName': 'theme-chalk'
      },
      'df-bui'
    ]
  ]
}
