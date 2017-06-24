export default function() {
  return {
    request: function(config) {
      config.headers["X-useragentcategory"] = "W";
      config.headers["X-useragenttype"] = "Chrome";
      config.headers["X-osversion"] = "linux";
      return config;
    }
  };
}
