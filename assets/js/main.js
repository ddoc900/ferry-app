let adultButon = document.getElementById("adult");
let childButton = document.getElementById("child");
let clearButton = document.getElementById('clear');
let total = document.getElementById("total");


let sum = 0

const addAdult = () => {
    total.innerHTML = (sum += 12.50)
}

const addChild = () => {
    total.innerHTML = (sum += 6.50)
}

const clear = () => {
    total.innerHTML = (sum = 0)
}



adultButon.addEventListener('click', addAdult);
childButton.addEventListener('click', addChild);
clearButton.addEventListener('click', clear);
