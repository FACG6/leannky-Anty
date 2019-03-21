const out = document.querySelector('.logout-btn');
out.addEventListener('click', () => {
  window.location.href = '/logout';
});
document.querySelector('.home').addEventListener('click', () => {
  window.location.href = '/userProfile';
});
document.querySelector('.qanon').addEventListener('click', () => {
  window.location.href = '/userQ';
});
document.querySelector('.sabqa').addEventListener('click', () => {
  window.location.href = './userPrevQ';
});
document.querySelector('.safhti').addEventListener('click', () => {
  window.location.href = './userMyProfile';
});
