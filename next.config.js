module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', option: { icon: true } }],
    });
    return config;
  },
};

// https://youtu.be/9tJTEGG0t-M
