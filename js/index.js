const gridBox = document.getElementById('grid-box');
const btn = document.getElementById('shuffleButton');
const wheelBlock = document.querySelector('.wheel-and-hamster');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');

const boxElements = [box1, box2, box3, box4, box5, box6]
const arr = ['Gagik Galstyan','Gevorg Mirzoyan','Hovo Ohanyan','Artur Petrosyan','Mary Grigoryan', 'person 6', 'person 7', 'person 8',
'person 9','person 10', 'person 11', 'person 12', 'person 13', 'person 14', 'person 15', 'person 16', 'person 17', 'person 18']

function forPaint () {
    arr.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('circle')
        element.innerText = item
        gridBox.appendChild(element)
    })
}

forPaint()

function shuffle () {
    const randomIndex = Math.floor(arr.length * Math.random())
    const selectedPerson = arr[randomIndex]

    const randomBoxIndex = Math.floor(boxElements.length * Math.random())
    const selectedBox = boxElements[randomBoxIndex]

    if (selectedBox.childElementCount < 4) {
        const boxElement = document.createElement('div')
        boxElement.classList.add('circle')
        boxElement.innerText = selectedPerson
        selectedBox.appendChild(boxElement)
        arr.splice(randomIndex, 1)
    }

    gridBox.innerHTML = ''
    wheelBlock.style.display = 'block'
    setTimeout (function () {
        wheelBlock.style.display = 'none'
    },2500)
    forPaint()
}

btn.addEventListener('click', shuffle)