//Components alert error function
export function displayMessage(messageType = "success", message = "") {
	const productContainer = document.querySelector(".product-container");
	return `<div class="message ${messageType}">${message}</div>`;
}
