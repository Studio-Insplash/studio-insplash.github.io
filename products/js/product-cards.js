/* A variable for retrieving data from products.json */
let products = [];

async function loadProducts() {
    /* Load JSON */
    try {
        const response = await fetch("data/products.json");
        if (!response.ok) {
            throw new Error("Failed to fetch JSON");
        }

        products = await response.json();

    } catch (error) {
        console.error("Failed to load products:", error);
    }
    
    // call renderProducts for init process
    renderProducts("all", null);
}

function filterProducts(main_value, sub_value) {
    if (main_value === "all") {
        return products;
    }
    
    // search main_value first, then sub_value
}

function createProductHTML(filteredProducts) {
    const html = filteredProducts.map(product => {
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
    return html;
}

function renderProducts(main_value, sub_value) {
    /* Load DOM */
    const container = document.querySelector(".products");
    if (!container)
        return;

    /* Search cards from json data */
    const filteredProducts = filterProducts(main_value, sub_value);

    /* Generate HTML */
    const html = createProductHTML(filteredProducts);

    /* Render HTML */
    container.innerHTML = html;
}

/* Init call */
loadProducts();