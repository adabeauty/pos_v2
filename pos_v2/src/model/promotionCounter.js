function promotionCounter(carItem){


  this.carItem = carItem;

}

promotionCounter.prototype.getPromotionQuantity = function(promotions){

  var  getJudgePromotion = function(barcode, promotions){

    var judgeValue;
    for(var i=0; i<promotions[0].barcodes.length; i++){
      if(barcode === promotions[0].barcodes[i]){

        judgeValue = true;
        break;
      }
    }
    return judgeValue;
    
  };

    var promotionQuantity = 0;

    var judgePromotion = 0;
    judgePromotion = getJudgePromotion(this.carItem.item.barcode, promotions);
    if(judgePromotion){
      promotionQuantity = Math.floor(this.carItem.quantity / 3);
    }

    return promotionQuantity;

};
