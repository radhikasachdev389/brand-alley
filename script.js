function shopCollection() {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}
function addToCart(button) {
    button.innerText = "Added ✓";
}