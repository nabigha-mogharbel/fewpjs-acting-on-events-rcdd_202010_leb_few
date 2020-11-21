// Your code here
let dodger=document.getElementById('dodger');


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});