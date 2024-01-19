function validate() {
  if (discount.checked == 1) {
    amount = document.getElementById("real-amount").textContent;
    coupon = document.getElementById("coupon-discount").textContent;
    offer = amount - coupon;
    document.getElementById("real-amount").textContent = amount - coupon;
  } else {
    document.getElementById("real-amount").textContent = amount;
  }
}

function changes() {
  coupon = document.getElementById("coupon-discount").textContent;
  if (coupon >= 1) {
    document.getElementById("discounts-container").style.display = "block";
  } else {
    document.getElementById("discounts-container").style.display = "none";
  }
}
