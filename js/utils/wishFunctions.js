export function getExistingWishitems() {
    const wishes = localStorage.getItem("wishitems");

    if (wishes === null) {
        return [];
    } else {
        return JSON.parse(wishes); //Convert it from it's string into it's original data structue when fetching from localStorage
    }
}