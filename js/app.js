const bestPriceId = document.getElementById('best-price');
const extraMemoryCostId = document.getElementById('extra-memory-cost');
const extraStorageCostId = document.getElementById('extra-storage-cost');
const delevaryChargeId = document.getElementById('delevary-charge');
const primaryTotal = document.getElementById('primary-total');



document.getElementById('btn-8gb').addEventListener('click', function () {
    bestPriceId.innerText = 1299;
    extraMemoryCostId.innerText = 0;
})
document.getElementById('btn-16gb').addEventListener('click', function () {
    extraMemoryCostId.innerText = '180';
})
document.getElementById('btn-256gb').addEventListener('click', function () {
    extraStorageCostId.innerText = '0';

})
document.getElementById('btn-512gb').addEventListener('click', function () {
    extraStorageCostId.innerText = '100';

})
document.getElementById('btn-1tb').addEventListener('click', function () {
    extraStorageCostId.innerText = '180';

})

document.getElementById('btn-aug-25').addEventListener('click', function () {
    delevaryChargeId.innerText = '0';

})
document.getElementById('btn-aug-18').addEventListener('click', function () {
    delevaryChargeId.innerText = '20';

})

function Total() {



    const bestPriceValue = parseFloat(bestPriceId.innerText);
    const extraStorageCostValue = parseFloat(extraStorageCostId.innerText);
    const extraMemoryCostValue = parseFloat(extraMemoryCostId.innerText);
    const delevaryChargeValue = parseFloat(delevaryChargeId.innerText);
    // const primaryTotalValue = parseFloat(primaryTotal.innerText)
    let total = bestPriceValue + extraMemoryCostValue + extraStorageCostValue + delevaryChargeValue;
    return total;
}
// primaryTotal.innerText = Total();;

console.log(bestPriceValue + extraMemoryCostValue + extraStorageCostValue + delevaryChargeValue);