let btn = document.querySelector("button");

btn.addEventListener("click" , ()=>{
    let h2 = document.querySelector("h2");
    let randomcolour = getRandomColour();
    h2.innerText = randomcolour;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolour;
});

function getRandomColour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let colour = `rgb(${red},${green},${blue})`;
    return colour;
}

let lowd = (a,b) => (a+b) ;