const express = require('express')
const router = express.Router()
const meal_model = require('../models/meal_db')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: './src/public/reviewImages',
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

const cookiParser = require("cookie-parser")
router.use(cookiParser())
router.use(express.json())

router.get('/', (req, res) => {
    const meals_in_cart = meal_model.getMealsByIds(req.cookies.cart_content)
    res.render('index.njk', {
        title: "main",
        meals: meal_model.getAllMeals().map((meal) => {
            meal.rating = getMealRating(meal.id)
            return meal
        }),
        cart: req.cookies.cart_content,
        meals_in_cart: meals_in_cart,
        total: meal_model.getTotalPrice(meals_in_cart),
        show_recent_bought: req.cookies.recent_bought ? true : false,
        meals_recent_bought: meal_model.getUniqeMealsByIds(req.cookies.recent_bought).map((meal) => {
            meal.rating = getMealRating(meal.id)
            return meal
        })
    })
})

router.get("/detail/:mealId", (req, res) => {
    const meals_in_cart = meal_model.getMealsByIds(req.cookies.cart_content)
    res.render('detail.njk', {
        title: "detail",
        meal: meal_model.getMealById(req.params.mealId),
        rating: getMealRating(req.params.mealId),
        meals_in_cart: meals_in_cart,
        total: meal_model.getTotalPrice(meals_in_cart)
    })
})

router.get("/detail/:mealId/reviews", (req, res) => {
    res.send(JSON.stringify(meal_model.getMealReviews(req.params.mealId)))
})

router.post("/detail/:mealId/reviews",
    upload.single('image'),
    (req, res) => {
        try {
            var today = new Date();
            var time = today.toLocaleDateString() + ', ' + today.toLocaleTimeString();
            const review = {
                reviwer_name: req.body.name,
                city: req.body.city,
                date: time,
                rating: req.body.rating,
                image: req.file.filename,
                review: req.body.review,
                meal_id: req.params.mealId
            }
            console.log(review)
            meal_model.addMealReview(review)
            res.sendStatus(200)
        } catch (ex) {
            console.log(ex)
            res.sendStatus(500)
        }
    })

function getMealRating(meal_id) {
    const meal_reviews = meal_model.getMealReviews(meal_id)
    if (meal_reviews[0]) {
        return (meal_reviews.reduce((total, { rating }) => total + rating, 0) / meal_reviews.length).toFixed(2)
    } else {
        return 0;
    }
}

module.exports = router