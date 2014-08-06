function printInventory(inputs){

  var allItems=loadAllItems();
  var promotions=loadPromotions();

  var userBarcodes = new scanBarcode(inputs);
  var barcodes = userBarcodes.getBarcodes();
  var userCart = new CartInformation(barcodes,allItems);
  var cartList = userCart.getAllCarList();
  for(var i= 0; i<cartList.length; i++){
    var promotionNum = new promotionCounter(cartList[i]);
    cartList[i].promotionQuantity = promotionNum.getPromotionQuantity(promotions);
  }

  var printer = new printObjects(cartList);
  var printText = printer.getprintInventory();
  console.log(printText);

}
