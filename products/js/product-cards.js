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
        .map(product => {
            const card = `
            <article class="product-card">
                <img src="${product.icon ?? ""}" alt="${product.description ?? ""}" class="product-card__icon">
                <h5 class="product-card__name">${product.name}</h5>
            </article>
            `;
            return product.url
                ? `<a href="${product.url}" target="_blank" rel="noopener noreferrer" class="product-card__link">${card}</a>`
                : card;
        }).join("");

    /* Add to DOM */
    container.innerHTML = html;
}

loadProducts();