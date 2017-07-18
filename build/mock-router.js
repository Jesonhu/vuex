let express = require('express')
let apiRoutes = express()

let shopCart = require('../src/mock/shopCart.json')

apiRoutes.get('/shopcart', (req, res) => {
    res.send(shopCart)
})

module.exports = apiRoutes
