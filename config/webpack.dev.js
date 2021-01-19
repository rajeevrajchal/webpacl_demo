const path = require("path")
const webpack = require("webpack")
const HTMLwebpackplugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        main: ["./src/index.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist/"),
        publicPath: "/"
    },
    devServer: {
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: {
                        //     attrs:["img:src"]
                        // }
                    }
                ]
            },
            {
                test: /\.(jpg|.webp|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "image/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLwebpackplugin({
            template: "./src/index.html"
        })
    ]
}
