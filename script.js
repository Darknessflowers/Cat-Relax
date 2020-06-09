const background = document.querySelector('.background');
let text = document.querySelector('#text');
// const breatheTime = (totalTime/5) * 2;
const breatheInTime = 3000;
const breatheOutTime = 4000;
const holdTime = 4000;
const totalTime = breatheInTime + breatheOutTime + holdTime;

breatheAnimation();

function breatheAnimation() {
  //Start breath
  text.innerText = 'Breathe In';
  //After breath length hold
  setTimeout(() => {
    text.innerText = 'Hold';
    //After hold length breathe
    setTimeout(()=> {
      text.innerText = 'Breathe out';
    }, holdTime); 
  }, breatheInTime);
}

setInterval(breatheAnimation, totalTime);

