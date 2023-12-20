const cartCounter = document.getElementById('cart-counter');
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const error = document.getElementById("error");
const cartContent = document.getElementById("cartContent")


const form = document.getElementById('form'); // this to target the form in detail.html
const reviewBtn = document.getElementById('reviews'); // this to target the add your review button
let review = form ? form.review : null;
let cartItems = [];

// The incrementor function 
increment ? increment.addEventListener('click', () => {
    counter.innerHTML++;
}) : {}

// The decrementor function
decrement ? decrement.addEventListener('click', () => {
    if (counter.innerHTML > 1) {
        counter.innerHTML--;
    }

}) : {}

reviewBtn ? reviewBtn.addEventListener('click', () => {
    form.style.display = "block";
    setTimeout(showForm, 0);
}) : {}

// To update the cart counter
function updateCartOne(id) {
    cartItems.push(id)
    cartCounter.innerHTML++;
}

function updateCart(id, total) {
    cartCounter.innerHTML = parseInt(cartCounter.innerHTML) +
        parseInt(counter.innerHTML);
}

function updateModel() {
    names = document.getElementsByClassName("orderName")
    prices = document.getElementsByClassName("price")
    let total = 0
    console.log(names[0])
    for (i = 0; i < cartItems.length; i++) {
        total += parseFloat(prices[i].innerHTML)
        cartContent.innerHTML += `<div class="col-6">${names[i].innerHTML}</div>
                                  <div class="col-6">${prices[i].innerHTML}</div>`
    }
    cartContent.innerHTML += `<div class="col-6">Total</div>
                              <div class="col-6">${total} SAR</div>`
}

function closeModel() {
    //return to the orignal state
    cartContent.innerHTML = `<div class="col-6">Item</div>
                             <div class="col-6">Price</div>`
}

function clearModel() {
    //return to the orignal state
    cartContent.innerHTML = `<div class="col-6">Item</div>
                             <div class="col-6">Price</div>`
    cartItems = []
    cartCounter.innerHTML = '0'
}

function showForm() {
    form.style.right = "0";
    form.style.position = "relative"
}

async function validateForm(id) {
    const name = form.name;
    if (name.value == "" && review.value != "") {
        name.value = "Customer"; // To assign the name to [Customer] if the user did not enter any name.
    }
    if (await noErrors()) {
        const reviewForm = new FormData(form);
        const res = await fetch(`/detail/${id}/reviews`, {
            method: 'POST',
            body: reviewForm
        })
        if (res.ok) {
            showReviews(id);
            form.style.position = "absolute"
            form.style.right = "-100%";
        }
    }
}

function noErrors() {
    let review = form.review;
    if (review.value == "") {
        error.style.display = "block"; // To show the error message if the condition is valid
        return false;
    } else {
        return true;
    }
}

function countLetters(event) {
    if (review.value != "") {
        error.style.display = "none"; // To hide the error message if the condition is valid
    }
    const value = review.value;
    const valueLength = review.value.length; // To assign the length of the textarea field to this constant.
    const maxChars = parseInt(event.getAttribute("max")); // to assign the max characters to this constant.

    if (valueLength > maxChars) {
        event.value = value.substr(0, maxChars); // To set the text area to the maximum number of characters only(NOT EXSEDING THE MAX LIMIT)
    }
    event.nextElementSibling.innerHTML = valueLength + "/" + maxChars; // To set the value for the characters counter & update while the user is typing.
}

//This is the AJAX function.
async function showReviews(id) {
    const res = await fetch(`/detail/${id}/reviews`)
    if (res.ok) {
        res.json().then((reviews) => {
                    const result = document.getElementById('review-part')
                    if (reviews[0]) {
                        let buttons = '';
                        let body = '';
                        for (k = 0; k < reviews.length; k++) {
                            buttons += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${k}" ${k==0 ? `class="active" aria-current="true"` : ''} aria-label="Slide ${k+1}"></button>`
                            body += `<div class="carousel-item ${k==0 ? 'active' : ''} container">
                                        <div class="row">
                                            <div class="col-lg-6 meal-card">
                                            <img class="p-0" src="../reviewImages/${reviews[k].image}" alt="man eating meal">
                                        </div>

                                        <div class="container-fluid ps-auto pe-auto col-lg-6 d-flex flex-wrap align-content-center review-description">
                                            <h4 class="col-6">${reviews[k].reviewer_name}</h4>
                                            <h5 >
                                                ${reviews[k].city} - ${reviews[k].date} ${'&#11088'.repeat(reviews[k].rating)};
                                            </h5>

                                            <p class="col-6">
                                                ${reviews[k].review}
                                            </p>
                                        </div>
                                    </div>
                                    </div>`
                        }
                        result.innerHTML =
                        `<h2 style='color: black;'>Users Reviews</h2>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                ${buttons}
                            </div>
                            <div class="carousel-inner">
                                <div class="container">
                                    ${body}
                                </div>   
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>`
                    } else {
                        result.innerHTML = "<h2 class='mb-3' style='color: black;'>No Reviews...</h2>"
                    }
        })
    }
}

async function sendForm(id){

}