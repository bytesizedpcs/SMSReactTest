let numberField = document.querySelector('input[name=number]');
let textField = document.querySelector('input[name=text]');
let button = document.querySelector('input[type=button]');
let msg = document.querySelector('.response');

function send() {
  let number = numberField.value.replace(/\D/g, '');
  let text = textField.value;
}

textField.addEventListener('keyup', function(e) {
  if ((e.keyCode || e.charCode) === 13) send();
}, false);

button.addEventListener('click', send, false);

fetch('/', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({number: number, text: text})
})
.then(function (res) {
  console.log(res);
})
.catch(function (error) {
  console.log(error);
});
