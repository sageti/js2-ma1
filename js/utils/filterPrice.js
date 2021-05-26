import { renderProducts } from "../components/createHTML.js";

export function searchProducts(products) {
    const priceSearch = document.querySelector("#price-search");

    priceSearch.onkeyup = function (event) {

        const searchValue = event.target.value.trim();

        const filteredProducts = products.filter(function (product) {
            if (product.price <= parseFloat(searchValue)) {
                return true;
            }

        });

        // Display all products when search is empty
        if (searchValue) {
            renderProducts(filteredProducts);
        } else {
            renderProducts(products);
        }

    };
}

