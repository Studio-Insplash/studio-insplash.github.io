const main = document.getElementById("main-filter")
main.addEventListener("change", () => {
    updateSubFilter(main.value)
    if (main.value === "all") {
        // call a function in product-cards.js with main.value and null 
    }
})

const sub = document.getElementById("sub-filter")
sub.addEventListener("change", () => {
    // call a function in product-cards.js with main.value and sub.value
})

const subOptions = {
    genre: ["all", "art", "tool", "game"],
    language: ["all", "english", "japanese"],
    developer: ["all", "nullboy", "will", "moqueca"]
}

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

    let html = ""
    options.forEach(item => {
        let label = item
        if (main_value === "genre" || main_value === "language") {
            label = label.charAt(0).toUpperCase() + label.slice(1)
        }
        if (main_value === "developer" && item === "all") {
            label = "All"
        }
        html += `<option value="${item}">${label}</option>`
    })
    sub.innerHTML = html
}