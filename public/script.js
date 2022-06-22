const socket = io();

const username = document.querySelector('input');
const submit = document.querySelector('.submit');
const yourDetails = document.querySelector(".your-details");
const msgInput = document.querySelector('.input-area input');
const sendBtn = document.querySelector('.input-area button');

submit.addEventListener('click', e => {
    if(username.value == "") {
        alert(`Name Shouldn't be empty!`);
    }
    else {
        socket.emit('join-user', `${username.value} has joined at port 5000`);
        yourDetails.style.display = "none";
        msgInput.disabled = false;
        msgInput.style.cursor = 'text';
    }
})

const messages = document.querySelector(".messages .message-area");

socket.on('join-user', (userMsg) => {
    var item = document.createElement('h3');
    item.textContent = userMsg;
    messages.appendChild(item);
})

sendBtn.addEventListener("click", e => {
    if(msgInput.value == "") {
        alert('Message Cannot Be Empty');
    }
    else {
        socket.emit('chat message', username.value, msgInput.value);
        msgInput.value = "";
    }
});

socket.on('chat message', (user, msg) => {
    var items = document.createElement('span');
    items.innerHTML = `<h6 style='font-size:15px;'>${user}</h6>` + `<br>` + msg;
    messages.appendChild(items);
    window.scrollTo(0, document.body.scrollHeight);
})