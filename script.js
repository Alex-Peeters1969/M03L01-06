/*dogsHealthTreatments
    eerst oren schoon maken;
    daarna nagels knippen;
    uiteindelijk haren knippen;
    */
    
function dogsHealthTreatments() {
    console.log('eerst oren schoon maken');
    console.log('daarna nagels knippen');
    console.log('uiteindelijk haren knippen');
}
dogsHealthTreatments();



function dogsHealthTreatments(extras) {
    console.log('eerst oren schoon maken');
    console.log('daarna nagels knippen');
    console.log('toevoegen  '  + extras +  '  behandeling');
    console.log('uiteindelijk haren knippen');
}


dogsHealthTreatments('borstel'); //function call
dogsHealthTreatments('was');//function call

dogsHealthTreatments();


function calculateDiscountedPrice(totalAmount, discount) {
    if (totalAmount > 25) {
    }
    else
        ; {
        return (totalAmount - discount);

    }
}

 calculateDiscountedPrice (25, 10);
 calculateDiscountedPrice (30, 10);  