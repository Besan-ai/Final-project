function updateQuantity(item, change) {
    const quantityElement = document.getElementById(item);
    if (!quantityElement) return;

    let quantity = parseInt(quantityElement.textContent) || 0;

    quantity += change;

    if (quantity < 0) quantity = 0;

    quantityElement.textContent = quantity;

    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;

    const items = ['يبرق', 'كبة', 'شاكرية', 'فتوش', 'بقلاوة', 'شورما', 'سمبوسة', 'تبولة', 'حلاوة الجبن']; // إضافة حلاوة الجبن
    const prices = {
        'يبرق': 7,   
        'كبة': 4,   
        'شاكرية': 6,   
        'فتوش': 3, 
        'بقلاوة': 5, 
        'شورما': 3,  
        'سمبوسة': 4, 
        'تبولة': 3,
        'حلاوة الجبن': 4 
    };

    items.forEach(item => {
        let quantityElement = document.getElementById(item);
        if (quantityElement) {
            let quantity = parseInt(quantityElement.textContent);
            total += quantity * prices[item];
        }
    });

    document.getElementById('totalPrice').textContent = `Total: ${total.toFixed(2)} JD`;
}
