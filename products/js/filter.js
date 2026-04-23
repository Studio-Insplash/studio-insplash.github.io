/**
 * Retrive main-filter tag
 * @type {string}
 */
const main = document.getElementById("main-filter")

// if the main-filter is changed, renew sub filter. If the main-filter is all, renew UI.
main.addEventListener("change", () => {
    updateSubFilter(main.value)
    if (main.value === "all") {
        renderProducts("all", null);
    }
})

/**
 * Get sub-filter tag
 * @type {string}
 */
const sub = document.getElementById("sub-filter")

// call a fuction that renews UI
sub.addEventListener("change", () => {
    renderProducts(main.value, sub.value);
})

/**
 * @typedef {Object} subOptions
 * @property {string} genre
 * @property {string} language
 * @property {string} developer
 */
const subOptions = {
    genre: ["art", "tool", "game"],
    language: ["english", "japanese"],
    developer: ["nullboy", "will", "moqueca"]
}

/**
 * Update product-cards UI
 * @param {string} main_value 
 * @returns - I dont'know here what should I write?
 */
function updateSubFilter(main_value) {
    const sub = document.getElementById("sub-filter")
    const options = subOptions[main_value]
    if (main_value === "all") {
        sub.style.display = "none"
        sub.innerHTML = ""
        return
    }
    else {
        sub.style.display = "inline-block"
    }

    let html = `<option value="" disabled selected>-- Select Sub --</option>`
    options.forEach(item => {
        let label = item
        if (main_value === "genre" || main_value === "language") {
            label = label.charAt(0).toUpperCase() + label.slice(1)
        }
        html += `<option value="${item}">${label}</option>`
    })
    sub.innerHTML = html
}