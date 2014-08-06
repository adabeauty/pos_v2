function scanBarcode(inputs){

   this.inputs = inputs;

}

scanBarcode.prototype.getBarcodes = function(){

  var barcodes = [];

  for(var i=0; i<this.inputs.length; i++){

    if(this.inputs[i].length>10)
      for(var j=0; j<this.inputs[i].substring(11,this.inputs[i].length); j++){
        barcodes.push(this.inputs[i].substring(0,10));
      }else
      barcodes.push(this.inputs[i]);
  }
  return barcodes;
};
