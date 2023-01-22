// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'





const heart = document.querySelectorAll(".like-glyph")

function myFunction(e){
  const allHearts = e.target
  mimicServerCall()
  .then(function(){
    if(allHearts.innerText === EMPTY_HEART){
      allHearts.innerText = FULL_HEART
      allHearts.className= "activated-heart"
    }
    else { 
      allHearts.innerText = EMPTY_HEART;
      allHearts.className = ""
    }
    })
  .catch(function(error){
     const modal = document.getElementById("modal")
     modal.className = ""
     modal.innerText = error
     setTimeout(() => modal.className = "hidden",3000)
  }
  )
}
for(const item of heart){
  item.addEventListener("click", myFunction)
}














//likes.classList.add('activated-heart')








// const likes = document.querySelectorAll('.like-glyph');

// function executeCB(e){
// const heart = e.target;
// mimicServerCall()
// let promise1 = new Promise((resolve, reject) => {
//   resolve(FULL_HEART), reject (EMPTY_HEART)
// })
// .then((promise1)=>{promise1})
// .catch(function(error){
//  let hider = document.querySelector("hidden")
//   hider.remove()
//   setTimeout(hider, 3000).add("hidden")
// })
// for(const item of likes){
//   item.addEventListener('click', executeCB)
// }}




// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
