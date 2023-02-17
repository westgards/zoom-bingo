// Your code that will be used by handlebars/Frontend goes in this js folder path
// Your code that will be used by handlebars/Frontend goes in this js folder path
const box = document.getElementsByClassName('word');
const row1 = document.querySelector('.row1');

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', selected);
}

function selected(event) {
  const square = event.target;
  confetti.start();
  setTimeout(function () {
    confetti.stop();
  }, 1000);
  square.classList.add('clicked');
}

// if (document.querySelector(".row1 .word .clicked").length > 0) {
//     console.log("------------------------worked--------------------------");
// };

// if (document.querySelectorAll(".row1 .word clicked") === true) {
//     console.log("------------------------worked--------------------------");
// };

// if (('.row1 .word.clicked').length === ('.row1 .word').length){
// 	//return true
//   console.log('true');
// }
// else{
// 	//return false
//   console.log('false');
// }
