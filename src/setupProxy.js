const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/468739", {
      target: "https://www.metaweather.com/api/location",
      secure: false,
      changeOrigin: true,
    })
  );
};
