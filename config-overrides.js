const {
  override,
  fixBabelImports,
  addBabelPlugins,
  addLessLoader,
  addWebpackAlias,
  useBabelRc
} = require('customize-cra')
const path = require('path');
module.exports = override(
  addBabelPlugins('transform-function-bind'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#40a9ff' }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@service': path.resolve(__dirname, 'src/service'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@config': path.resolve(__dirname, 'src/config'),
  }),
  useBabelRc()
)
