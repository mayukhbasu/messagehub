const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('../../package.json').dependencies;

module.exports = {
  output: {
    uniqueName: 'reporting',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve(__dirname, '../../node_modules'), // Resolve node_modules at the project root level
      'node_modules'
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reporting',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': path.resolve(__dirname, './src/app/reporting/reporting.module.ts'),
      },
      shared: {
        ...deps,
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/common'] },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/router'] },
        'zone.js': { singleton: true, strictVersion: true, requiredVersion: deps['zone.js'] },
      },
    }),
  ],
};
