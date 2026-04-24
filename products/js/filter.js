/**
 * Main filter select element
 * @type {HTMLSelectElement}
 */
const main = document.getElementById("main-filter")

// Update sub filter and UI when main filter changes
main.addEventListener("change", () => {
    updateSubFilter(main.value)
    if (main.value === "all") {
        // When main is "all", explicitly pass null to avoid depending on the sub value
        renderProducts("all", null);
    }
})

/**
 * Sub filter select element
 * @type {HTMLSelectElement}
 */
const sub = document.getElementById("sub-filter")

// Update products when sub filter changes
sub.addEventListener("change", () => {
    renderProducts(main.value, sub.value);
})

/**
 * Sub filter options mapped by main category
 * @type {Object<string, string[]>}
 */
const subOptions = {
    genre: ["art", "tool", "game"],
    language: ["english", "japanese"],
    developer: ["nullboy", "will", "moqueca"]
}

/**
 * Update sub filter UI based on selected main category
 * 
 * @param {string} mainValue - Selected main category
 * @returns {void}
 */
function updateSubFilter(mainValue) {
    const sub = document.getElementById("sub-filter")
    const options = subOptions[mainValue]
    if (mainValue === "all") {
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
        if (mainValue === "genre" || mainValue === "language") {
            label = label.charAt(0).toUpperCase() + label.slice(1)
        }
        html += `<option value="${item}">${label}</option>`
    })
    sub.innerHTML = html
}