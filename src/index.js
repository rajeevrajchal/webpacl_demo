require("@babel/runtime/regenerator")
require('./index.html')
require("./theme.scss")

const a =async (args) => {
    const{a, b} = args
    await console.log('hello the es6', b)
    console.log('bye es6', a)
}
a({a:1, b:2})
