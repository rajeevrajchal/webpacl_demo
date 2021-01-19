const path = require("path")
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    mode:"development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist/"),
        publicPath: "/"
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: "dist",
        compress: true,
        hot:true,
        publicPath: "/",
        port: 8000
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}
