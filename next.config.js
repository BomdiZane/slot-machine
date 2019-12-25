const withOffline = require('next-offline');

const nextConfig = {
  target: 'serverless',
  env: {
    APP_NAME: 'Slot Machine',
    DESCRIPTION: 'Slot Machine test app',
    KEYWORDS: 'Games, JavaScript Development, Web Development, JavaScript, Web, Developer, Frontend, Backend, Cloud, Databases, Version Control, Data Formats, Testing, Deployment',
    URL: 'http://localhost:3000',
    AUTHOR: 'Adombang Munang Mbomndih <dzedock@yahoo.com> (https://bomdisoft.com)',

    USER_THEME_KEY: 'userTheme'
  },
};

const withAssetRelocator = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;

      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false,
        });

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: '@zeit/webpack-asset-relocator-loader',
            options: {
              outputAssetBase: 'assets',
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true,
            },
          },
        });
      }

      return (typeof nextConfig.webpack === 'function') ? nextConfig.webpack(config, options) : config;
    },
  });
};

module.exports = withAssetRelocator(withOffline(nextConfig));
