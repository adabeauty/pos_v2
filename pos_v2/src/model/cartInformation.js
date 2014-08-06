function CartInformation(barcodes,allItems){

  this.barcodes = barcodes;
  this.allItems = allItems;
}


CartInformation.prototype.getAllCarList = function(){
  var  judgeBarcodeHasExsited = function (barcode,  allCartList){

    var judgeValue = 0;

    for(var i=0; i<allCartList.length; i++){
      if(barcode ===  allCartList[i].item.barcode){
        judgeValue =  allCartList[i] ;
        break;
      }

    }
    return judgeValue;
  };

  var getItem = function (allItems,barcode){

    var item;
    for(var i=0; i<allItems.length; i++){
      if(allItems[i].barcode === barcode){
          item = allItems[i];
      }
    }
    return item;
  };

  var allCartList = [];
  for (var i=0;i<this.barcodes.length;i++){

    var barcode = this.barcodes[i];
    var barcodeHasExsited = judgeBarcodeHasExsited(barcode, allCartList);

    if(barcodeHasExsited){
      barcodeHasExsited.quantity ++;
    } else{
      allCartList.push(new cartItem(getItem(this.allItems,barcode), 1));
    }

  }
  return allCartList;

};
