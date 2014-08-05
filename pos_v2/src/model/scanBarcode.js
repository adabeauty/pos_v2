function scanBarcode(inputs){

  this.inputs = inputs;
  this.barcodes = init(this.inputs);

  var init = function(inputs){

  var barcodes = [];
  for(var i=0; i<inputs.length; i++){

    if(inputs[i].length>10)
      for(var j=0; j<inputs[i].substring(11,inputs[i].length); j++)
        barcodes.push(inputs[i].substring(0,10));

    else
      barcodes.push(inputs[i]);
  }
  return barcodes;
  }

}
