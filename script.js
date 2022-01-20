function removeActiveStyle(buttons) {
    buttons.forEach(function (button) {
        button.classList.remove("active");
    })
}

function generateGrid(divNum = 30 * 30) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = " ";
    for (let i = 0; i < divNum; i += 1) {
        const gridDiv = document.createElement("div");
        //placeholder for clear
        grid.appendChild(gridDiv);
    }

}

function generateColor(name, colors) {
    const gridItem = document.querySelectorAll(".grid > div");
    gridItem.forEach((item) => {
        if (name === "rainbow") {
            const randomColors = colors[Math.floor(Math.random() * colors.length,)];
            item.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = randomColors;
            });
        } else if (name === "color" || name === "eraser") {
            item.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = colors;
            });
        }

    });
}








function chooseColor() {
const colorButtons = document.querySelectorAll(".rectangle");
colorButtons.forEach((button) => {
button.addEventListener("click", () => {
    removeActiveStyle(colorButtons);
    if(button.classList.contains("color")) {
        colorButtons[0].classList.add("active");
        generateColor("color", "#000000");
    } else if (button.classList.contains("rainbow")) {
        colorButtons[1].classList.add("active");
        generateColor("rainbow", ['#ff0000', '#ff9900', '#fff700', '#00ff08', '#0040ff', "#5500ff", "#ff00ea"]);
    } else if (button.classList.contains("eraser")) {
        colorButtons[2].classList.add("active");
        generateColor("eraser", "#FFFFFF");
    }
});
});
}








chooseColor();
generateGrid();