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
const arr = ['Գագիկ Գալստյան', 'Գևորգ Միրզոյան', 'Հովո Օհանյան', 'Արթուր Պետրոսյան', 'Մերի Գրիգորյան', 'Էլեն Հայրապետյան', 'Դավիթ Մուրադյան', 'Գագիկ Հարությունյան', 'Գևորգ Միրզախանյան',
'Լորետա Բադալյան', 'Մարիամ Գրիգորյան Մ․', 'Մարիամ Գրիգորյան Փ․', 'Միհրան Գուտներյան', 'Սաթենիկ Ներսիսյան', 'Շուշան Այվազյան', 'Սահակ Ալեքսանյան', 'Սամվել Ամիրյան', 'Մեսրոպ Ղուկասյան']

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
    
    element.style.fontSize = '16px';
  
    setTimeout(() => {
      element.style.transform = '';
      element.classList.remove('animate');
      selectedBox.appendChild(element);
      
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