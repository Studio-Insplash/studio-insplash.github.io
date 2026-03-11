async function loadProducts() {
    /* Load DOM */
    const container = document.querySelector(".products");
    if (!container)
        return;

    /* Load JSON */
    let products = [];
    try {
        const response = await fetch("data/products.json");
        if (!response.ok) {
            throw new Error("Failed to fetch JSON");
        }

        products = await response.json();

    } catch (error) {
        console.error("Failed to load products:", error);
    }

    /* Generate HTML */
    const html = products
        .map(product => `
            <article class="product-card">
                <img src="${product.icon ?? ""}" alt="${product.description ?? ""}" class="product-card__icon">
                <h5>${product.name}</h5>
            </article>
        `).join("");

    /* Add to DOM */
    container.innerHTML = html;
}

loadProducts();