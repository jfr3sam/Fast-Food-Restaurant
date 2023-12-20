const express = require('express')
const cookiParser = require("cookie-parser")
const router = express.Router()
let cart = []
router.use(cookiParser())
router.use(express.urlencoded())

router.get('/cart/', validateCookie, (req, res) => {
    cart.push(req.query.id)
    res.cookie('cart_content', cart)
    res.redirect(req.query.back)
})

router.post('/order/', validateCookie, (req, res) => {
    if (req.cookies.cart_content) {
        res.cookie('recent_bought', cart, { maxAge: 1000 * 60 * 60 * 24 * 30 }) //maxAge = 30 days
        res.clearCookie('cart_content')
        cart = []
    }
    res.redirect('/')
})

function validateCookie(req, res, next) {
    const cart_cookie = req.cookies.cart_content
    if (cart_cookie)
        cart = cart_cookie
    next()
}


module.exports = router