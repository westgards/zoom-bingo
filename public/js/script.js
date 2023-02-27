// Your code that will be used by handlebars/Frontend goes in this js folder path
const box = document.getElementsByClassName('word');
const check = document.getElementsByClassName('clicked');
// const table = document.getElementsByTagName("td");

// const row1 = document.querySelector("row1");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', selected);
}

function selected(event) {
  if (event.target.classList.contains('clicked')) {
    document.removeEventListener('click', selected);
  } else {
    const square = event.target;

    square.classList.add('clicked');

    console.log(check.length);
    console.log(check);
  }
  if (check.length == box.length) {
    confetti.start();
    setTimeout(function () {
      confetti.stop();
    }, 8000);
    alert('YAY YOU WON OH MY GOD WOOOOOOO!!');
  }
}
