let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    document.getElementById('cart-count').innerText = cart.length;
    alert(productName + " đã được thêm vào giỏ hàng!");
}

function openCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous cart items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price.toLocaleString('vi-VN')}₫`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN') + '₫';
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check payment method and alert bank details if needed
    const paymentMethod = document.getElementById('payment-method').value;
    if (paymentMethod === 'bank') {
        alert('Số tài khoản: 6126171111 TechComBank DangTrungKim');
    } else {
        alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng.');
    }

    // Reset cart
    cart = [];
    totalPrice = 0;
    document.getElementById('cart-count').innerText = '0';
    document.getElementById('checkout-modal').style.display = 'none';
});
