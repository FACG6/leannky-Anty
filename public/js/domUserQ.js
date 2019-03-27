const addQ = document.querySelector('#addQ');
const qTitle = document.querySelector('#qTitle');
const qContent = document.querySelector('#qContent');
const msgField = document.querySelector('.msg');

addQ.addEventListener('click', (event) => {
  event.preventDefault();
  if (qTitle.value.trim() && qContent.value.trim()) {
    const data = {
      qTitle: qTitle.value.trim(),
      qContent: qContent.value.trim(),
    };
    fetch('/userq', {
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
      })
      .catch((err) => { msgField.textContent = err; });
  } else {
    msgField.textContent = 'الرجاء تعبئة جميع الحقول';
  }
});
