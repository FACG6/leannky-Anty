const out=document.querySelector(".logout-btn");
out.addEventListener("click", event => {
    window.location.href = "/logout"

});
document.querySelector(".home").addEventListener("click", event => {

    window.location.href = "/userProfile"
  
});

document.querySelector(".qanon").addEventListener("click", event => {

  window.location.href = "/userQ"
});
document.querySelector(".sabqa").addEventListener("click", event => {

  window.location.href = "./userPrevQ"
});
document.querySelector(".safhti").addEventListener("click", event => {

  window.location.href = "./userMyProfile"
});
