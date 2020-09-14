// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "")
    let right = parseInt(rightNumbers, 10)

    if (right < 360) {
      dodger.style.left = `${right + 5}px`
    }
}

function moveDodgerUp() {
  let upNumber = dodger.style.bottom.replace("px","")
  let up = parseInt(upNumber, 10)
  if (up < 380) {
  dodger.style.bottom = `${up + 5}px`
  }
}

function moveDodgerDown() {
  let downNumber = dodger.style.bottom.replace("px","")
  let down = parseInt(downNumber, 10)
  if (down > 0) {
  dodger.style.bottom = `${down - 5}px`
  }

}

function addHeight() {
  if (dodger.style.height === "") {
  dodger.style.height = `20px`
  dodger.style.width = `50px`}
  if (dodger.style.height != "") {
    let dodgerHeight = dodger.style.height.replace("px", "")
    let dHeight = parseInt(dodgerHeight, 10)
    if (dHeight > 50) {
      dodger.style.backgroundColor = "blue"
      text = document.createElement('p')
      text.innerHTML = `Chill, dude, this is huge`
      if (!document.querySelector('#dodger p')) {
      dodger.appendChild(text) }
      
    }
    dodger.style.height = `${dHeight + 10}px`
    let dodgerWidth = dodger.style.width.replace("px", "")
    let dWidth = parseInt(dodgerWidth, 10)
    dodger.style.width = `${dWidth + 10}px`
  }

}

window.addEventListener("click", addHeight)

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
    if (e.key === "ArrowUp") {
      moveDodgerUp()
    }
    if (e.key == "ArrowDown") {
      moveDodgerDown()
    }
  });

 

