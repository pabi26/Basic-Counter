let count = 0;
let countEl = document.getElementById('count-element');
let toggle = document.getElementById('limit-switch');
let isChecked = document.getElementById('limit-switch')
let limitInput = document.getElementById('limit-input')
let maxNum = document.getElementById('max-num')
let remainingDisplay = document.getElementById("remainingDisplay")
let countInput = document.getElementById('count-input')
const title =  document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const mainBody = document.getElementById('main-body')

title.style.opacity = 0;
subtitle.style.opacity = 0;
mainBody.style.opacity = 0;



function fadeInTitle() {
    let opacity = parseFloat(title.style.opacity);
    if (opacity < 1) {
      opacity += 0.1;
      title.style.opacity = opacity;
      setTimeout(fadeInTitle, 100);
    }
  }
  
  // Call the animation function after a delay
  setTimeout(fadeInTitle, 1500);

  function fadeInsubtitle() {
    let opacity = parseFloat(subtitle.style.opacity);
    if (opacity < 1) {
      opacity += 0.1;
      subtitle.style.opacity = opacity;
      setTimeout(fadeInsubtitle, 100);
    }
  }
  
  // Call the animation function after a delay
  setTimeout(fadeInsubtitle, 3000);


  function fadeInBody() {
    document.getElementById('header').style.display = 'none'
    let opacity = parseFloat(mainBody.style.opacity);
    if (opacity < 1) {
      opacity += 0.1;
      mainBody.style.opacity = opacity;
      setTimeout(fadeInBody, 150);
    }
  }
  
  // Call the animation function after a delay
  setTimeout(fadeInBody, 5000);




isChecked.addEventListener('change', function(){
    if(isChecked.checked) {
        limitInput.disabled = false;
        document.getElementById("availableDisplay").style.display = 'block';
    } else {
        limitInput.disabled = true;
        document.getElementById("availableDisplay").style.display = 'none';

    }
})

limitInput.addEventListener('change', function(){
    updateRemainingBalance()
});



countInput.addEventListener('change', function (){
    count = document.getElementById("count-input").value
    countEl.textContent = count 
    updateRemainingBalance()
    if(count < 1){
        document.getElementById("decrement-btn").style.display = "none";
    } else{
        document.getElementById("decrement-btn").style.display = "inline";
    }
})





function increment(){
    count ++
    countEl.textContent = count
    updateRemainingBalance()
    if(count > 0){
        document.getElementById("decrement-btn").style.display = "inline"
    }
}


function decrement(){
    count --
    countEl.textContent = count
    updateRemainingBalance()
    if(count === 0){
        document.getElementById("decrement-btn").style.display = "none"
    }
}

function updateRemainingBalance(){
    remainingBalance = limitInput.value - count
    if(remainingBalance > 0){
        document.getElementById("available-text").style.display = "block";
        document.getElementById("limit-reached-text").style.display = "none";
        remainingDisplay.textContent = remainingBalance
    }else if(remainingBalance < 1){
        document.getElementById("available-text").style.display = "none";
        document.getElementById("limit-reached-text").style.display = "block";
        remainingDisplay.textContent = remainingBalance
    }
}




document.getElementById("confirm-reset").addEventListener('click', function(){
    reset()

})



function reset(){
    count = 0;
    countEl.textContent = count;
    document.getElementById('reset').style.display = "none";
    document.getElementById("decrement-btn").style.display = "none";
    if(isChecked.checked){
        isChecked.checked = false;
        limitInput.disabled = true;
        document.getElementById("availableDisplay").style.display = 'none';
        limitInput.value = 0
        countInput.value = 0
    }
        
}














document.getElementById('icon-settings').addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('settings').style.display = "block"
})

document.getElementById('cancel-settings').addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('settings').style.display = "none"
})


document.getElementById('icon-reset').addEventListener('click', function(){
    console.log('clicked2')
    document.getElementById('reset').style.display = "block"
})


document.getElementById('cancel-reset').addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('reset').style.display = "none"
})

document.getElementById("confirm-reset").addEventListener('click', function(){
    count = 0
    countEl.textContent = count
    document.getElementById('reset').style.display = "none"

})

























document.getElementById("black").addEventListener('click', function () {
    document.body.style.backgroundColor = "Black"
    document.body.style.color = "white"
})

document.getElementById("white").addEventListener('click', function () {
    document.body.style.backgroundColor = "White"
    document.body.style.color = "black"
    document.getElementById('settings').style.color = "white"
    document.getElementById('reset').style.color = "white"
})

document.getElementById("blue").addEventListener('click', function () {
    document.body.style.backgroundColor = "Blue"
    document.body.style.color = "white"
   
})


document.getElementById("red").addEventListener('click', function () {
    document.body.style.backgroundColor = "Red"
    document.body.style.color = "white"
})

document.getElementById("purple").addEventListener('click', function () {
    document.body.style.backgroundColor = "Purple"
    document.body.style.color = "white"
})

document.getElementById("grey").addEventListener('click', function () {
    document.body.style.backgroundColor = "Grey"
    document.body.style.color = "white"
})

document.getElementById("orange").addEventListener('click', function () {
    document.body.style.backgroundColor = "Orange"
    document.body.style.color = "white"
})

document.getElementById("green").addEventListener('click', function () {
    document.body.style.backgroundColor = "Green"
    document.body.style.color = "white"
})
