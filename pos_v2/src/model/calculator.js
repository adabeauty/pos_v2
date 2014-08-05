function calculator(barcode, quantity){

  var _this = this;

  this.barcode = barcode;
  this.quantity = quantity;
  
  this.promotionQuantity ;
  this.everyTotalMoney ;
  this.everySaveMoney ;

  var  getJudgePromotion = function(barcode){

    var judgeValue;

    var promotions=loadPromotions();
    for(var i=0; i<promotions[0].barcodes.length; i++){
      if(barcode === promotions[0].barcodes[i]){

        judgeValue = true;
        break;
      }
    }
    return judgeValue;
  }


  this.getPromotionQuantity = function(barcode){
    var judgePromotion = 0;

    judgePromotion = getJudgePromotion(barcode);
    if(judgePromotion){
      _this.promotionQuantity = Math.floor(_this.quantity / 3);
    }

  }

  var getEveryTotalMoney = function(){
     _this.everyTotalMoney = _this. _this.price * (_this.quantity - _this.promotionQuantity);
   }

  var getEverySaveMoney = function(){
     _this.everySaveMoney = _this.price * _this.promotionQuantity;
   }

}
