var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil((Math.random() * 100) + 1)
  var newItem = {
    itemName: item,
    itemPrice: price
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var price = Math.ceil((Math.random() * 100) + 1);
    if (cart.length === 0) {
      return "Your shopping cart is empty.";
    } else if (cart.length === 1) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
    } else if (cart.length === 2) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    } else if (cart.length >= 3){
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
    }
  }


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    sum += getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    const check = (cart[i].itemName === item)
    if(check === true){
      cart.splice(i, 1)
      return
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var cartTotal = total()
  if(cardNumber){
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
