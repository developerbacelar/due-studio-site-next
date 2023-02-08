// proxy.config.js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/googlemaps", {
      target: "https://maps.googleapis.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/googlemaps": "/maps/api/place/details/json"
      }
    })
  );
};
