
function cartItem(item, quantity){

  this.item = item ;
  this.quantity = quantity;
  this.promotionQuantity = 0;

}

cartItem.prototype.getEverySaveMoney = function(){

  var price = this.item.price;
  return price * this.promotionQuantity;

};

cartItem.prototype.getEveryTotalMoney = function(){

  var price = this.item.price;
  return price * (this.quantity - this.promotionQuantity);

};
