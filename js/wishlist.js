import { getExistingWishitems } from "./utils/wishFunctions.js";

const wishes = getExistingWishitems();

const productContainer = document.querySelector(".product-container");

if (wishes.length === 0) {
    productContainer.innerHTML += `<div><p>No items in wishlist.</p></div>`;
}

wishes.forEach(function (wish) {
    productContainer.innerHTML += `
        <div class="product">
            <div class="icon"><i class="fa fa-heart"></i></div>
            <h3>${wish.name}</h3>
            <p>Price: $${wish.price}</p>
        </div>`;
});

