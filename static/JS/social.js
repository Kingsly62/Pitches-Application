// function one
let likebtn = document.querySelector("#likebtn");
let dislikebtn = document.querySelector("#dislikebtn");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

likebtn.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "green";
});

dislikebtn.addEventListener("click", () => {
  input2.value = parseInt(input1.value) + 1;
  input2.style.color = "red";
});


// function two
let likebtns = document.querySelector("#likebtns");
let dislikebtns = document.querySelector("#dislikebtns");

let inputs1 = document.querySelector("#inputs1");
let inputs2 = document.querySelector("#inputs2");

likebtns.addEventListener("click", () => {
  inputs1.value = parseInt(inputs1.value) + 1;
  inputs1.style.color = "green";
});

dislikebtns.addEventListener("click", () => {
  inputs2.value = parseInt(inputs1.value) + 1;
  inputs2.style.color = "red";
});

// functon three

let likebtnss = document.querySelector("#likebtnss");
let dislikebtnss = document.querySelector("#dislikebtnss");

let inputss1 = document.querySelector("#inputss1");
let inputss2 = document.querySelector("#inputss2");

likebtnss.addEventListener("click", () => {
  inputss1.value = parseInt(inputss1.value) + 1;
  inputss1.style.color = "green";
});

dislikebtnss.addEventListener("click", () => {
  inputss2.value = parseInt(inputss1.value) + 1;
  inputss2.style.color = "red";
});

//button on comment validation

function validation(){
    swal("Good Job","have received your comment","Congrats!!");
}