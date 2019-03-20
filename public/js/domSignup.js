const submitBtn = document.querySelector('.submit-btn');
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const msgField = document.querySelector('.msg');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const data = {
    userName: userName.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      if (res.msg) {
        msgField.textContent = res.msg;
      } else {
        msgField.textContent = '';
      }
    }).catch((err) => { msgField.textContent = err; });
});
