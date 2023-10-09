const express = require('express')

const bodyParse  = require('body-parser')
const { discountCart, checkoutCart } = require('./component/CartItemdiscount')
const cors = require('cors')
const app = express()

app.use(bodyParse.json())
app.use(cors())
const port = 4000

app.post('/discount',discountCart)
app.post('/checkout',checkoutCart)

app.listen(port, () => {
    console.log(`Server is running port: ${port}`)
})