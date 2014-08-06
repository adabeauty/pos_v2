
function printObjects(cartList){

  this.cartList = cartList;

}

printObjects.prototype.getSaveMoney = function(){

  var saveMoney = 0;
  var everySaveMoney;
  for(var i=0; i<this.cartList.length; i++){
    everySaveMoney = this.cartList[i].getEverySaveMoney();
    saveMoney += everySaveMoney;
  }

  return saveMoney;
};

printObjects.prototype.getTotalMoney = function(){

  var totalMoney = 0;
  var everyTotalMoney;
  for(var i=0; i< this.cartList.length; i++){
    everyTotalMoney = this.cartList[i].getEveryTotalMoney();
    totalMoney += everyTotalMoney;
  }
  return totalMoney;
};

printObjects.prototype.getCurrentDate =function(){

  var dateDigitToString = function (num) {
      return num < 10 ? '0' + num : num;
  };

  var currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds()),
      formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  return formattedDateString;
};


printObjects.prototype.getprintInventory = function() {

  var printItemText = function(cartList,itemText){

    var everyTotalMoney;
    for(var i=0; i<cartList.length; i++){
      everyTotalMoney = cartList[i].getEveryTotalMoney();
      itemText += '名称：' + cartList[i].item.name + '，数量：' + cartList[i].quantity +
                  cartList[i].item.unit + '，单价：' + cartList[i].item.price.toFixed(2) + '(元)，小计：' +
                  everyTotalMoney.toFixed(2) + '(元)\n';
    }
    return itemText;

  };

  var printPromotionText = function(cartList,promotionText){

    for(var i=0; i< cartList.length; i++){
      if(cartList[i].promotionQuantity > 0 ){
        promotionText += '名称：' + cartList[i].item.name +'，数量：' + cartList[i].promotionQuantity +
                        cartList[i].item.unit + '\n';
      }
    }
    return promotionText;
  };

  var itemText = '',
      promotionText = '';
  var totalMoney = this.getTotalMoney();
  var saveMoney = this.getSaveMoney();

  itemText = printItemText(this.cartList,itemText);
  promotionText = printPromotionText(this.cartList,promotionText);

  return '***<没钱赚商店>购物清单***\n' +
               '打印时间：' + this.getCurrentDate() + '\n' +
               '----------------------\n' +
               itemText +
               '----------------------\n' +
               '挥泪赠送商品：\n' +
                promotionText +
               '----------------------\n' +
               '总计：' + totalMoney.toFixed(2) + '(元)\n' +
               '节省：' + saveMoney.toFixed(2) + '(元)\n' +
               '**********************';
};
