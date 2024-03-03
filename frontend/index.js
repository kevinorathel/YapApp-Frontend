const form = document.querySelector('form');
const msgInput = document.querySelector('#msg-input');
const msgsContainer = document.querySelector('#msgs');
var count = 0;
var userId;

var userName;
var firstName;
var lastName;
var imageURL;



form.addEventListener('submit', (event) => {
  event.preventDefault();
  const msgContent = msgInput.value;
  if(count == 0){
    if (msgContent.trim() !== '') {
        userId = 1;
        firstName = 'Kevin';
        lastName = 'Joseph';
        userName = firstName + ' ' + lastName;
        const msg = document.createElement('div');
        msg.classList.add('msg');
        msg.innerHTML = `
          <div class="msg-header">
            <img src="../images/${userId}.png" alt="Profile picture">
            <h2>${userName}</h2>
          </div>
          <p>${msgContent}</p>
        `;
        msgsContainer.append(msg);
        msgInput.value = '';
      }
      count++;
  }
  else{
    if (msgContent.trim() !== '') {
        userId = 3;
        firstName = 'Govind';
        lastName = 'Rajkumar';
        userName = firstName + ' ' + lastName;
        const msg = document.createElement('div');
        msg.classList.add('msg-else');
        msg.innerHTML = `
          <div class="msg-header-else">
            <img src="../images/${userId}.png" alt="Profile picture">
            <h2>${userName}</h2>
          </div>
          <p>${msgContent}</p>
        `;
        msgsContainer.append(msg);
        msgInput.value = '';
      }
      count = 0;
  }
  
});
