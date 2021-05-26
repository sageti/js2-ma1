import { getExistingWishitems } from "../utils/wishFunctions.js";

export function renderProducts(products) {

    const productContainer = document.querySelector(".product-container");
    const wishes = getExistingWishitems();

    productContainer.innerHTML = "";

    products.forEach(function (product) {

        //Check if an element is marked as a wish (in the wishitems)
        const doesObjectExist = wishes.find(function (wish) {
            console.log(wish);

            return parseInt(wish.id) === product.id;
        });

        console.log(doesObjectExist);

        //If a product is marked as a wish, change style of the i element
        let cssClass = "far";
        if (doesObjectExist) {
            cssClass = "fa";
        }

        // console.log(product);
        productContainer.innerHTML += `
        <div class="product">
            <div class="icon"><i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i></div>
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        </div>`;

    });

    if (products.length === 0) {
        productContainer.innerHTML = `<div class="no-products">
                                    <h3>No match</h3>
                                    <p>We couldn't find any products matching the price you searched for</p>
                                    </div>`;
    }
}

