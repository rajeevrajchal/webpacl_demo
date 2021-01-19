import express from 'express'
import path from "path"
import webpack from "webpack"
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from "webpack-hot-middleware"
import config from '../../config/webpack.dev'

const app = express()

//TO SERVE FROM DIST
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, config.devServer))

//HOT RELOAD
app.use(webpackHotMiddleware(compiler))

const staticMiddleware = express.static("dist")

app.use(staticMiddleware)
//SERVER STARTING
app.listen(8000, () => {
    console.log('server started at port 8000')
})
