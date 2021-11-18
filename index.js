function drawGrid(squares = 16) {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    const ratio = 480 / squares;
    for(i = 0; i < squares * squares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${ratio}px`;
        square.style.height = `${ratio}px`;
        container.appendChild(square);
    }

    const randomValue = () => Math.floor(Math.random() * 256);

    const divs = document.querySelectorAll('.square');
    divs.forEach(div => {
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 
                `rgb(${randomValue()},255 ,${randomValue()})`;
        });
    });
}

function removeGrid() {
    const container = document.querySelector('.container');
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function getUserInput() {
    const userInput = prompt(
        "Enter the number of squares per side\nDefault: 16 | Max: 100"
        );
    if(userInput > 100) {getUserInput()}
    removeGrid();
    drawGrid(+userInput);
}

const button = document.querySelector('button');
button.addEventListener('click', getUserInput);

drawGrid();
