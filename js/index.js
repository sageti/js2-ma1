import { displayMessage } from "./components/displayMessage.js";
import { renderProducts } from "./components/createHTML.js";
import { searchProducts } from "./utils/filterPrice.js";
import { getExistingWishitems } from "./utils/wishFunctions.js";

const url =
	"https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function makeApiCall() {
	try {
		const response = await fetch(url);
		const results = await response.json();
		let products = results.data;

		renderProducts(products);
		searchProducts(products);

		// loadIcons();

		const wishButtons = document.querySelectorAll(".product i");

		wishButtons.forEach((button) => {
			button.addEventListener("click", handleClick);
		});

	} catch (error) {
		console.log(error);
		const productContainer = document.querySelector(".product-container");
		productContainer.innerHTML = displayMessage("error", error);
	}
}
makeApiCall();



function handleClick() {

	this.classList.toggle("fa"); // this = event.target
	this.classList.toggle("far");

	const id = this.dataset.id;
	const name = this.dataset.name;
	const price = this.dataset.price;

	const currentWishes = getExistingWishitems();
	// console.log(currentWishes);

	const productExists = currentWishes.find(function (wish) {
		return wish.id === id;
	});

	// console.log("productExists", productExists);
	if (productExists === undefined) {
		const product = { id: id, name: name, price: price };
		currentWishes.push(product); //push the product into the new array
		saveWishes(currentWishes); //Save the value of the current wishes
	} else {
		const newWishes = currentWishes.filter(wish => wish.id !== id); //Creating a new aray for items not existing
		saveWishes(newWishes);
	}

}

function saveWishes(wishes) {
	localStorage.setItem("wishitems", JSON.stringify(wishes)); //Convert the object to a string in order to save it in localStorage
}