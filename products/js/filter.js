console.log("filter loaded")
const main = document.getElementById("main-filter")
console.log(main)
main.addEventListener("change", () => {
    if (main.value === "all") {
        // process
    }
    else if (main.value === "genre") {
        // process
        const sub = document.getElementById("sub-filter")
        sub.innerHTML = '<option value="">-- Select Sub --</option><option value="art">Art</option><option value="tool">Tool</option><option value="game">Game</option>'
    }
    else if (main.value === "language") {
        // process
    }
    else if (main.value === "developer") {
        // process
    }
})