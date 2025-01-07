function updateQuantity(item, change) {
    let quantityElement = document.getElementById(item);
    if (quantityElement) {
        let currentQuantity = parseInt(quantityElement.textContent);
        let newQuantity = currentQuantity + change;

        if (newQuantity >= 0) {
            quantityElement.textContent = newQuantity;
        }

        updateTotalPrice();
    } else {
        console.error(`Element with ID ${item} not found.`);
    }
}

function updateTotalPrice() {
    let total = 0;

    const items = ['منسف', 'مسخن', 'كفتة', 'كنافة', 'مقلوبة', 'مفتول', 'فتة', 'الحلقوم']; // إضافة "الحلقوم" إلى القائمة
    const prices = {
        'منسف': 8,
        'مسخن': 6,
        'كفتة': 4,
        'كنافة': 1,
        'مقلوبة': 4,
        'مفتول': 5,
        'فتة': 2,
        'الحلقوم': 2 
    };

    items.forEach(item => {
        let quantityElement = document.getElementById(item);
        if (quantityElement) {
            let quantity = parseInt(quantityElement.textContent);
            total += quantity * prices[item];
        }
    });

    document.getElementById('totalPrice').textContent = `Total: $${total.toFixed(2)}`;
}
