const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('restaurant.db'), { fileMustExist: true });

const nutritions = [{
        "id": 1,
        "nutrition": {
            "serving_size": "1 sandwich (57 g)",
            "serving_per_container": 1,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    },
    {
        "id": 2,
        "nutrition": {
            "serving_size": "1 sandwich (357 g)",
            "serving_per_container": 1,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    },
    {
        "id": 3,
        "nutrition": {
            "serving_size": "1 Sandwich (257 g)",
            "serving_per_container": 3,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    },
    {
        "id": 4,
        "nutrition": {
            "serving_size": "1 dish (200 g)",
            "serving_per_container": 4,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    },
    {
        "id": 5,
        "nutrition": {
            "serving_size": "1 sandwich (257 g)",
            "serving_per_container": 1,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    },
    {
        "id": 6,
        "nutrition": {
            "serving_size": "1 slice (50 g)",
            "serving_per_container": 12,
            "facts": [{
                    "item": "calories",
                    "amount_per_serving": 200,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "calories_from_fat",
                    "amount_per_serving": 70,
                    "daily_value": "",
                    "unit": "cal"
                },
                {
                    "item": "total_fat",
                    "amount_per_serving": 7,
                    "daily_value": "11%",
                    "unit": "g"
                },
                {
                    "item": "saturated_fat",
                    "amount_per_serving": 4,
                    "daily_value": "20%",
                    "unit": "g"
                },
                {
                    "item": "cholestrol",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "sodium",
                    "amount_per_serving": 220,
                    "daily_value": "9%",
                    "unit": "mg"
                },
                {
                    "item": "total_carb",
                    "amount_per_serving": 31,
                    "daily_value": "10%",
                    "unit": "g"
                },
                {
                    "item": "vitamin_A",
                    "amount_per_serving": 0,
                    "daily_value": "0%",
                    "unit": "mg"
                },
                {
                    "item": "calcium",
                    "amount_per_serving": 0,
                    "daily_value": "2%",
                    "unit": "mg"
                }
            ]
        },
    }
]

const getAllMeals = () =>
    db.prepare('SELECT * FROM meals ORDER BY id DESC;').all();

const getMealById = (targetId) => {
    const meal = db.prepare('SELECT * FROM meals WHERE id = ? ORDER BY id DESC;').get(targetId)
        //returning the uniun of meal and nutritions.
    return {...meal, ...nutritions.find(({ id }) => id == targetId) };
}

const getMealReviews = (targetId) =>
    db.prepare('SELECT * FROM reviews WHERE meal_id = ? ORDER BY id DESC;').all(targetId)

const addMealReview = (review) =>
    db.prepare('INSERT INTO reviews(reviewer_name, city, date, rating, image, review, meal_id) VALUES (?, ?, ?, ?, ?, ?, ?);')
    .run(review.reviwer_name, review.city, review.date, review.rating, review.image, review.review, review.meal_id)

const getMealsByIds = (targetIds) => {
    if (targetIds)
        return targetIds.map((id) => getMealById(id))
    else
        return []
}

const getTotalPrice = (meals) => {
    if (meals)
        return meals.reduce((total, { price }) => total + price, 0)
    else
        return 0
}

const getUniqeMealsByIds = (targetIds) => {
    let uniqe = []
    if (targetIds)
        return targetIds.filter((id) => {
            if (!uniqe.includes(id)) {
                uniqe.push(id)
                return id
            }
        }).map((id) => getMealById(id))
    else
        return []
}

module.exports = {
    getAllMeals,
    getMealById,
    getMealReviews,
    addMealReview,
    getMealsByIds,
    getTotalPrice,
    getUniqeMealsByIds
}