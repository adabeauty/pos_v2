function cartInformation(barcodes){

  var _this = this;

  this.barcodes = barcodes;
  this.cartList = [];

  var  judgeBarcodeHasExsited = function (barcode){

    var judgeValue;

    for(var i=0; i< _this.cartList.length; i++){
      if(barcode === _this.cartList[i].barcode){
        judgeValue = _this.cartList[i] ;
        break;
      }

    }
    return judgeValue;
  }

  var countGoodsQuantity = function(){

//    var goodsQuantity = [];                    //可以抽象为类

    for (var i=0;i<_this.barcodes.length;i++){

      var barcode = _this.barcodes[i];
      var barcodeHasExsited = judgeBarcodeHasExsited(barcode);

      if(barcodeHasExsited){
        barcodeHasExsited.quantity ++;
      } else{
         _this.cartList.push(new pos(barcode,1));
      }

    }

//    return goodsQuantity;

  }

}
