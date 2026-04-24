/**
 * List of product objects loaded from JSON
 * 
 * @type {Array<Object>}
 */
let products = [];

/**
 * Fetch and load product data from JSON file
 * 
 * @returns {Promise<void>}
 */
async function loadProducts() {
    try {
        const response = await fetch("data/products.json");
        if (!response.ok) {
            throw new Error("Failed to fetch JSON");
        }

        products = await response.json();
    } catch (error) {
        console.error("Failed to load products:", error);
    }
    
    // Initial render: display all products when the page is first loaded
    renderProducts("all", null);
}

/**
 * Filter products based on selected categories
 * 
 * @param {string} mainValue - Selected main category
 * @param {string|null} subValue - Selected sub category
 * @returns {Array<Object>}
 */
function filterProducts(mainValue, subValue) {
    if (mainValue === "all") {
        return products;
    }
    
    return products.filter(product => {
        return product[mainValue] === subValue;
    })
}


/**
 * Generate HTML string for product cards
 * 
 * @param {Array<Object>} filteredProducts 
 * @returns {string}
 */
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

/**
 * Render product cards to the UI
 * 
 * @param {string} mainValue
 * @param {string|null} subValue 
 * @returns {void}
 */
function renderProducts(mainValue, subValue) {
    /* Load DOM */
    const container = document.querySelector(".products");
    if (!container)
        return;

    /* Search cards from json data */
    const filteredProducts = filterProducts(mainValue, subValue);

    /* Generate HTML */
    const html = createProductHTML(filteredProducts);

    /* Render HTML */
    container.innerHTML = html;
}

/* Init call */
loadProducts();