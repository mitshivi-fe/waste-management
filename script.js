let totalBill = 0;
let applicableDiscount = 0;

function calculateBill() {
    const pizzaQty = parseInt(document.getElementById('pizza').value) || 0;
    const burgerQty = parseInt(document.getElementById('burger').value) || 0;
    const pastaQty = parseInt(document.getElementById('pasta').value) || 0;

    const pizzaPrice = 200;
    const burgerPrice = 100;
    const pastaPrice = 150;

    totalBill = (pizzaQty * pizzaPrice) + (burgerQty * burgerPrice) + (pastaQty * pastaPrice);

    document.getElementById('bill-info').innerText = `Total Bill: Rs. ${totalBill}`;

    document.getElementById('screen0').style.display = 'none';
    document.getElementById('screen1').style.display = 'block';
}

function toggleCheckbox(selectedId) {
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = false;
    document.getElementById(selectedId).checked = true;
}

function showEwasteForm() {
    const isYesChecked = document.getElementById('yes').checked;
    const isNoChecked = document.getElementById('no').checked;

    if (isYesChecked) {
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
    } else if (isNoChecked) {
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen5').style.display = 'block';
        document.getElementById('final-bill-no-discount').innerText = `Final Bill: Rs. ${totalBill}`;
    } else {
        alert('Please select an option.');
    }
}

function calculateDiscount() {
    const mobileBatteryQty = parseInt(document.getElementById('mobile-battery').value) || 0;
    const remoteQty = parseInt(document.getElementById('remote').value) || 0;
    const bulbQty = parseInt(document.getElementById('bulb').value) || 0;
    const wireQty = parseInt(document.getElementById('wire').value) || 0;
    const toysQty = parseInt(document.getElementById('toys').value) || 0;
    const chargerQty = parseInt(document.getElementById('charger').value) || 0;
    const smallEItemsQty = parseInt(document.getElementById('small-e-items').value) || 0;

    const mobileBatteryDiscount = mobileBatteryQty * 2;
    const remoteDiscount = remoteQty * 3;
    const bulbDiscount = bulbQty * 1;
    const wireDiscount = wireQty * 0.5;
    const toysDiscount = toysQty * 4;
    const chargerDiscount = chargerQty * 2;
    const smallEItemsDiscount = smallEItemsQty * 1;

    const totalDiscount = mobileBatteryDiscount + remoteDiscount + bulbDiscount + wireDiscount + toysDiscount + chargerDiscount + smallEItemsDiscount;

    const maxDiscount = totalBill * 0.1; // Max 10% of the order value
    applicableDiscount = Math.min(totalDiscount, maxDiscount);

    document.getElementById('discount-info').innerText = `You get a discount of Rs. ${applicableDiscount} on your Zomato order.`;
    
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('screen3').style.display = 'block';
}

function toggleContinueCheckbox(selectedId) {
    document.getElementById('continue-yes').checked = false;
    document.getElementById('continue-no').checked = false;
    document.getElementById(selectedId).checked = true;
}

function handleDiscountChoice() {
    const continueYes = document.getElementById('continue-yes').checked;
    const continueNo = document.getElementById('continue-no').checked;

    if (continueYes) {
        document.getElementById('screen3').style.display = 'none';
        document.getElementById('screen4').style.display = 'block';
        const finalBill = totalBill - applicableDiscount;
        document.getElementById('final-bill-with-discount').innerText = `Final Bill: Rs. ${finalBill}`;
    } else if (continueNo) {
        document.getElementById('screen3').style.display = 'none';
        document.getElementById('screen5').style.display = 'block';
        document.getElementById('final-bill-no-discount').innerText = `Final Bill: Rs. ${totalBill}`;
    } else {
        alert('Please select an option to continue.');
    }
}
