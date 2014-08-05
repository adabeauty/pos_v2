// function printObject(barcode, name, price, unit, quantity, promotionQuantity, everyTotalMoney, everySaveMoney){
function printObject(processCarItem,allItems){

  var _this = this;

  this.name  ;
  this.barcode = processInformation.barcode;

  this.price ;
  this.unit ;

  this.quantity = processInformation.quantity;
  this.promotionQuantity = processInformation.promotionQuantity;
  this.everySaveMoney = processInformation.everySaveMoney;
  this.everyTotalMoney = processInformation.everyTotalMoney;

  var getNamePriceUnit = function(){
    for(var i=0; i<allItems.length; i++){
      if(_this.barcode === allItems[i].barcode){
        _this.name = allItems[i].name;
        _this.price = allItems[i].price;
        _this.unit = allItems[i].unit;
      }
    }
  }


}
