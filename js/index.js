const gridBox = document.getElementById('grid-box')
const btn = document.getElementById('shuffleButton')
const arr = ['Gagik Galstyan','Gevorg Mirzoyan','Hovo Ohanyan','Artur Petrosyan','Mary Grigoryan']


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
    arr.splice(randomIndex, 1)
    gridBox.innerHTML = ''
    forPaint()
    // giveTheResult()
}

// function giveTheResult () {
    
// }

btn.addEventListener('click', shuffle)