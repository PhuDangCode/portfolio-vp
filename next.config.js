const webpack = require("webpack");

module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            })
        );
        return config;
    },
};