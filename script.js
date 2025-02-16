// Socks
const plusbutton = document.getElementById("plusbutton");
const minusbutton = document.getElementById("minusbutton");
const quantitybutton = document.getElementById("quantitybutton");
const supprimer1 = document.getElementById("supprimer1");
const coeur1 = document.getElementById("coeur1");
const card_body = document.getElementById("card_body");
const quantityDisplay = document.querySelector("quantity");
const total_price = document.getElementById("total_price");

console.log(total_price);

const unit_price = document.getElementById("unit_price").textContent;
console.log(unit_price);

let quantity = 0;

function updateTotal() {
  let total = parseInt(quantity) * parseInt(unit_price);
  total_price.textContent = total;
}

plusbutton.addEventListener("click", function () {
  quantitybutton.textContent = quantity++;
  updateTotal();
});

minusbutton.addEventListener("click", function () {
  quantitybutton.textContent = quantity--;
});

supprimer1.addEventListener("click", function () {
  card_body.remove();
});

coeur1.addEventListener("click", function () {
  coeur1.classList.toggle("favorited");
});
// basket
const basket1 = document.getElementById("basket1");
const basket2 = document.getElementById("basket2");
const quantite = document.getElementById("quantite");
const supprimer = document.getElementById("supprimer");
const coeur = document.getElementById("coeur");
const produit1 = document.getElementById("produit1");

let quantity1 = 0;

basket1.addEventListener("click", function () {
  quantite.textContent = quantity1++;
});

basket2.addEventListener("click", function () {
  quantite.textContent = quantity1--;
});

supprimer.addEventListener("click", function () {
  produit1.remove();
});

coeur.addEventListener("click", function () {
  coeur.classList.toggle("favorited");
});
// bag
const bagplus = document.getElementById("bagplus");
const bagminus = document.getElementById("bagminus");
const quantitybag = document.getElementById("quantitybag");
const supprimer2 = document.getElementById("supprimer2");
const coeur2 = document.getElementById("coeur2");
const bag = document.getElementById("bag");

let quantity2 = 0;

bagplus.addEventListener("click", function () {
  quantitybag.textContent = quantity2++;
});

bagminus.addEventListener("click", function () {
  quantitybag.textContent = quantity2--;
});

supprimer2.addEventListener("click", function () {
  bag.remove();
});

coeur2.addEventListener("click", function () {
  coeur2.classList.toggle("favorited");
});

updateTotal();
