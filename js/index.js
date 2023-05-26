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

function movePerson(element, selectedBox) {
    element.classList.add('animate');
    const boxRect = selectedBox.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
  
    const boxCenterX = boxRect.left + boxRect.width / 2;
    const boxCenterY = boxRect.top + boxRect.height / 2;
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;
  
    const translateX = boxCenterX - elementCenterX;
    const translateY = boxCenterY - elementCenterY - 50; // Adjust the value as needed
  
    element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    
    // Apply font size and color when moving
    element.style.fontSize = '24px';
    element.style.color = 'white';
  
    setTimeout(() => {
      element.style.transform = '';
      element.classList.remove('animate');
      selectedBox.appendChild(element);
      
      // Reset font size and color after moving
      element.style.fontSize = '';
      element.style.color = '';
    }, 2000);
  }
  

function shuffle () {
    const randomIndex = Math.floor(arr.length * Math.random())
    const selectedPerson = arr[randomIndex]

    const randomBoxIndex = Math.floor(boxElements.length * Math.random())
    const selectedBox = boxElements[randomBoxIndex]

    if (selectedBox.childElementCount === 3) {
        const boxIndex = boxElements.indexOf(selectedBox);
        if (boxIndex !== -1) {
          boxElements.splice(boxIndex, 1);
          console.log(`Box ${boxIndex + 1} jnjvav`)
        }
    }

    if (selectedBox.childElementCount < 4) {
        const boxElement = document.createElement('div')
        boxElement.classList.add('circle')
        boxElement.innerText = selectedPerson
        selectedBox.appendChild(boxElement)

        movePerson(boxElement, selectedBox);

        arr.splice(randomIndex, 1)
    }

    gridBox.innerHTML = ''
    wheelBlock.style.display = 'block'
    setTimeout (function () {
        wheelBlock.style.display = 'none'
    },2000)
    forPaint()
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
      shuffle();
    }
}

// const whichButton = (event) => {
//     if (event.code === 'Enter') {
//         gettingWeather()
//     }
// }

document.addEventListener('keydown', handleKeyPress);
btn.addEventListener('click', shuffle)