const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
    mode: "development",
    devServer: {
        onpen: true,
        contentBase: "dist"
    },
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    },




    devServer: {
        inline: false,
        contentBase: "./dist",
    }

}
