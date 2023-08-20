const itemList = [];
let total = 0;
let coupon = false;

function updateOrder() {
  let orderList = "<ol class='space-y-3'>";
  total = 0;

  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    orderList += `<li>${i + 1}. ${item.name}</li>`;
    total += item.price;
  }

  orderList += "</ol>";

  let discount = 0;
  if (coupon == true) {
    discount = (total * 20) / 100;
  }
  const discountedTotal = total - discount;

  document.getElementById("add-area").innerHTML = `
   <div class="space-y-2 mb-8"> 
      ${orderList}
    </div>
   <div class="space-y-3 mt-8">
      <p>Total price: <span class="text-[#6b6b6b]">${total.toFixed(
        2
      )} TK</span></p>
      <p>Discount: <span class="text-[#6b6b6b]">${discount.toFixed(
        2
      )} TK</span></p>
      <p>Total: <span class="text-[#6b6b6b]">${discountedTotal.toFixed(
        2
      )} TK</span></p>
    </div>
  `;

  const applyButton = document.getElementById("apply-btn");
  if (total >= 200) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", "true");
  }

  const purchaseButton = document.getElementById("purchase-btn");
  if (itemList.length > 0) {
    purchaseButton.style.display = "block";
  } else {
    purchaseButton.style.display = "none";
  }
}

function applyCoupon() {
  const couponInput = document.getElementById("coupon-input").value;
  if (couponInput === "SELL200") {
    coupon = true;
    updateOrder();
  }
}
