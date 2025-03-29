const clockEl = document.querySelector('.clock')
const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')
const dialLinesEl = document.querySelector('.dial-lines')
const handHourEl = document.querySelector('.hour-hand')
const handMinuteEl = document.querySelector('.minute-hand')
const handSecondEl = document.querySelector('.second-hand')

const weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"
]

const drawDialLines = () => {
  for (let i = 0; i < 60; i++ ) {
    const dialLineEl = document.createElement('div')
    dialLineEl.classList.add('dial-line')
    dialLineEl.style.transform = `rotate(${6*i}deg)`
    i % 5 === 0 && dialLineEl.classList.add('five')
    dialLinesEl.appendChild(dialLineEl)
  }
}

const setTransformHands = () => {
  handHourEl.style.transform = `translate(-50%, -80%) rotate(0deg)`
  handMinuteEl.style.transform = `translate(-50%, -80%) rotate(0deg)`
  handSecondEl.style.transform = `translate(-50%, -80%) rotate(0deg)`
}

const checkIfTimeHasChanged = () => {
  const now = new Date()
  if (now.getSeconds() !== date.getSeconds()) { 
    date = now
    redrawClock()    
  }      
}

const redrawClock = () => {     
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const dayOfMonth = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hourDeg = hour * 30 + minute * (360 / 720)
  const minuteDeg = minute * 6 + second * (360 / 3600)
  const secondDeg = second * 6
 
  setElementRotate(handHourEl, hourDeg)
  setElementRotate(handMinuteEl, minuteDeg)
  setElementRotate(handSecondEl, secondDeg)

  dateEl.innerHTML = `${dayOfMonth}/${month < 9 ? '0'+ month : month }/${year}`
  dayEl.innerHTML = weekdays[date.getDay()]
}


const setElementRotate = (element, angle) => {
  const elementTransform = element.style.transform 
   element.style.transform = elementTransform
                              .replace(/rotate\([0-9\.]*deg\)/, `rotate(${angle}deg)`)
}  

let date = new Date()
drawDialLines()
setTransformHands()
setInterval(checkIfTimeHasChanged, 100)
