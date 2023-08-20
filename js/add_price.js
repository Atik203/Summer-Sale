function InputPrice(inputId) {
  const PriceInput = document.getElementById(inputId).innerText;
  const price = parseFloat(PriceInput);
  return price;
}
// receive nameID and priceID from card
function cardClicked(nameId, priceId) {
  const name = document.getElementById(nameId).innerText;
  const priceText = document.getElementById(priceId).innerText;
  const price = parseFloat(priceText);
  itemList.push({ name: name, price: price });
  updateOrder();
}
