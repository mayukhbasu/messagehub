// apps/reporting/webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
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
    alias: {
      ...deps,
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reporting',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './apps/reporting/src/app/reporting/reporting.module.ts',
      },
      shared: {
        ...deps,
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/common'] },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: deps['@angular/router'] },
      },
    }),
  ],
};
