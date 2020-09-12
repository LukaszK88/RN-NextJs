const path = require('path');

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, 'node_modules'),
      ],
      extensions:[
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ],
      symlinks: false,
    };

    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
    });

    return config
  },
}
