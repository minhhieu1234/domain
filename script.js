// chữ
const list = document.querySelectorAll('.hehe')
var index = 0

setInterval((e) =>{
  list.forEach((e) => {
    e.classList.remove('change-properties')
  })
  list[index].classList.add('change-properties')
  index++
  if (index== list.length){
    index = 0
  }
},200)
// văn chương
const list_1 = document.querySelectorAll('.glow-text')
var index_1 = 0

setInterval((e) =>{
  list_1.forEach((e) => {
    e.classList.remove('change-properties_1')
  })
  list_1[index_1].classList.add('change-properties_1')
  index_1++
  if (index_1== list_1.length){
    index_1 = 0
  }
},200)
// name
const list_2 = document.querySelectorAll('.hihi')
var index = 0

setInterval((e) =>{
  list_2.forEach((e) => {
    e.classList.remove('change-properties_2')
  })
  list_2[index].classList.add('change-properties_2')
  index++
  if (index== list_2.length){
    index = 0
  }
},200)
// ouline border
const box = document.getElementById('#block-info-1','#block-info-2','#block-info-3','.img-content');

function stopAnimation() {
  box.style.animation = 'none';
}
function startAnimation() {
  box.style.animation = 'pulse 2s infinite';
}
box.addEventListener('mouseenter', stopAnimation);
box.addEventListener('mouseleave', startAnimation);


// autoplay
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');
  audio.play();
});


// hien thi block
