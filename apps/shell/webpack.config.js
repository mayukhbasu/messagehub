// apps/shell/webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;

module.exports = {
  output: {
    uniqueName: 'shell',
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
      name: 'shell',
      remotes: {
        reporting: 'reporting@http://localhost:4201/remoteEntry.js', // Update this with the correct URL for the reporting remote
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
