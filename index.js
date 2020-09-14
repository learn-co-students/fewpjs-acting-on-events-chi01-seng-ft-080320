// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "green";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
       moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
  });




    function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers)
    dodger.style.left = `${left - 20}px`
        if (dodger.style.left < "0px"){
            dodger.style.left = `0px`
        }
    }
    
    function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px","")
    let right = parseInt(rightNumbers)
    dodger.style.left = `${right + 20}px`
        if (dodger.style.left > "360px"){
            dodger.style.left = `360px`
        }
    }

    function moveDodgerUp(){
        let upNumbers = dodger.style.bottom.replace("px","")
        let up = parseInt(upNumbers)
        dodger.style.bottom = `${up + 20}px`
        if (dodger.style.bottom > "380px"){
            dodger.style.bottom = "380px"
        }
    }

    function moveDodgerDown(){
        let downNumbers = dodger.style.bottom.replace("px","")
        let down = parseInt(downNumbers)
        dodger.style.bottom = `${down - 20}px`
        if (dodger.style.bottom < "0px"){
            dodger.style.bottom = "0px"
        }
    }