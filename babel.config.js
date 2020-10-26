module.exports = function(api) {
  api.cache(true);
  return {
    "plugins": [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ],
    presets: ['babel-preset-expo'],
  };
};
