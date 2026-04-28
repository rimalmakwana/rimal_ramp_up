const cart = [
  { name: "T-Shirt", price: 499, qty: 2 },
  { name: "Jeans", price: 1299, qty: 1 },
  { name: "Cap", price: 299, qty: 3 },
  { name: "Socks", price: 99, qty: 4, discount: 0.1 },
];

// Total Price
function getTotalPrice(items) {
  const totalPrice = items.reduce((total, item) => {
    const discount = item.discount || 0;
    const itemTotal = item.price * item.qty * (1 - discount);
    return total + itemTotal;
  }, 0);

  console.log("Total Price:", totalPrice);
}

// price>500
function getItemsAbove500(items) {
  const result = items.filter((item) => item.price > 500);
  console.log("Items Above ₹500:", result);
}

// name in UpperCase
function getUppercaseNames(items) {
  const result = items.map((item) => item.name.toUpperCase());
  console.log("Uppercase Names:", result);
}

//Most expensive item
function getMostExpensiveItem(items) {
  const result = items.reduce((max, item) => {
    return item.price > max.price ? item : max;
  });

  console.log("Most Expensive Item:", result);
}

getTotalPrice(cart);
getItemsAbove500(cart);
getUppercaseNames(cart);
getMostExpensiveItem(cart);
