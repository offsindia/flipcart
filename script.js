// 100 Top Trending Products Above ₹1 Lakh (2025 trends, high-end)
const topProducts = [];
for (let i = 1; i <= 100; i++) {
    const originalPrice = Math.floor(Math.random() * 500000) + 100000; // >1L
    const finalPrice = Math.round(originalPrice * 0.25); // 75% off
    topProducts.push({
        id: i,
        name: `Trending Product ${i} (e.g., iPhone 17 Pro Max, MacBook Pro M4, Sony OLED TV)`,
        original: originalPrice,
        final: finalPrice,
        desc: 'High-end 2025 trending item with premium features.',
        image: `https://via.placeholder.com/200x150/2874f0/FFFFFF?text=Product+${i}`,
        url: `https://www.flipkart.com/product-${i}` // Simulated clickable URL
    });
}

// Render products with 75% off
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = topProducts.map(p => `
        <div class="product-card" onclick="window.location.href='${p.url}';">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price-original">₹${p.original.toLocaleString()}</div>
            <div class="price">₹${p.final.toLocaleString()}</div>
            <div class="price-off">75% OFF</div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    alert(`Added product ${id} to cart! (Educational simulation)`);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
