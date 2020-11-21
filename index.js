// Your code here
let dodger=document.getElementById('dodger');

function moveDodgerLeft(){
  dodger.style.bachgroundColor='blue';
}
document.addEventListener("keydown", function(e) {
  console.log(e.key);
})