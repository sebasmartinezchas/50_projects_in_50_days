const loveMe = document.querySelector(".loveMe");
const times = document.querySelector(".times");

//Desafio:dejar pasar 800ms entre cada click para determinar si es un click simple o un doble click.
/**https://stackoverflow.com/questions/5497073/how-to-differentiate-single-click-event-and-double-click-event
 *  let timer
loveMe.addEventListener('click',(e)=>{
    if(e.detail===1){
        timer=setTimeout(()=>{
           console.log('click') 
        },800)
    }

})
   
loveMe.addEventListener('dblclick',(e)=>{
    clearTimeout()
    console.log('dblclick')
})
 
 * 
 */

//Solución de Brad

let clickTime = 0;
let timesClick=0
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart)
  times.innerHTML=++timesClick
  setTimeout(()=>heart.remove(),1000)
};
