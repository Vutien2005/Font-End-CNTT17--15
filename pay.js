function addToCart() {
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;

    const cartInfo = document.getElementById('cart-info');
    cartInfo.innerHTML = `
        <p><strong>Sản Phẩm:</strong> Xe phân khối lớn - BWM - Mã lực 80000cc - 01</p>
        <p><strong>Động cơ:</strong> ${size}</p>
        <p><strong>Màu Sắc:</strong> ${color}</p>
        <p><strong>Giá:</strong> ${price}</p>
    `;
}
