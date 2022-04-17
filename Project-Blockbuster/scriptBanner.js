let i = 0;
let j = 3;

function next() {
    document.getElementById("img" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("img" + (i + 1)).classList.add("active");
}

function prev() {
    document.getElementById("img" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("img" + (i + 1)).classList.add("active");
}