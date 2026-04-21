const main = document.getElementById("main-filter")
main.addEventListener("change", () => {
    updateSubFilter(main.value)
    if (main.value === "all") {
        renderProducts("all", null);
    }
})

const sub = document.getElementById("sub-filter")
sub.addEventListener("change", () => {
    renderProducts(main.value, sub.value);
})

/**
 * 
 */
const subOptions = {
    genre: ["art", "tool", "game"],
    language: ["english", "japanese"],
    developer: ["nullboy", "will", "moqueca"]
}

/**
 * 
 * @param {*} main_value 
 * @returns 
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