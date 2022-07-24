// needed id's in variable
const bestPriceId = document.getElementById('best-price');
const extraMemoryCostId = document.getElementById('extra-memory-cost');
const extraStorageCostId = document.getElementById('extra-storage-cost');
const delevaryChargeId = document.getElementById('delevary-charge');
const primaryTotal = document.getElementById('primary-total');
const finalTotal = document.getElementById('final-total');

// all button events 
function memoryButton() {
    // btn memory 
    document.getElementById('btn-8gb').addEventListener('click', function () {
        bestPriceId.innerText = 1299;
        extraMemoryCostId.innerText = 0;
        cuponCode();
        totalPrice();

    })
    document.getElementById('btn-16gb').addEventListener('click', function () {
        extraMemoryCostId.innerText = '180';
        cuponCode();
        totalPrice();
    })
    // btn storage
    document.getElementById('btn-256gb').addEventListener('click', function () {
        extraStorageCostId.innerText = '0';
        totalPrice();
        cuponCode();
    })
    document.getElementById('btn-512gb').addEventListener('click', function () {
        extraStorageCostId.innerText = '100';
        cuponCode();
        totalPrice();
    })
    document.getElementById('btn-1tb').addEventListener('click', function () {
        extraStorageCostId.innerText = '180';
        cuponCode();
        totalPrice();
    })
    // delevary charge
    document.getElementById('btn-aug-25').addEventListener('click', function () {
        delevaryChargeId.innerText = '0';
        cuponCode();
        totalPrice();
    })
    document.getElementById('btn-aug-18').addEventListener('click', function () {
        delevaryChargeId.innerText = '20';
        cuponCode();
        totalPrice();
    })

}
// total price section 
function totalPrice() {
    const bestPriceValue = parseFloat(bestPriceId.innerText);
    const extraStorageCostValue = parseFloat(extraStorageCostId.innerText);
    const extraMemoryCostValue = parseFloat(extraMemoryCostId.innerText);
    const delevaryChargeValue = parseFloat(delevaryChargeId.innerText);
    let total = bestPriceValue + extraMemoryCostValue + extraStorageCostValue + delevaryChargeValue;
    const applied20Parsent = total * 0.2;
    const AfterCuponAppliedTotal = total - applied20Parsent;
    document.getElementById('primary-total').innerText = total;
    finalTotal.innerText = total;
    return AfterCuponAppliedTotal;
}
// cupon code section 
function cuponCode() {
    document.getElementById('btn-apply').addEventListener('click', function () {
        const inputFild = document.getElementById('cupon-input').value;
        if (inputFild == 'code') {
            finalTotal.innerText = totalPrice();
        } else {

        }
    })
}

cuponCode();
memoryButton();