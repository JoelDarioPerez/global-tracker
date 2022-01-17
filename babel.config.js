module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./src",
            rootPathPrefix: "r/",
          },
          {
            rootPathSuffix: "./src/components",
            rootPathPrefix: "c/",
          },
          {
            rootPathSuffix: "./src/views",
            rootPathPrefix: "v/",
          },
          {
            rootPathSuffix: "./src/assets",
            rootPathPrefix: "a/",
          },
        ],
      },
    ],
  ],
};
