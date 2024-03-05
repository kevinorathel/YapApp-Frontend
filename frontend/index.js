const form = document.querySelector('form');
const msgInput = document.querySelector('#msg-input');
const msgsContainer = document.querySelector('#msgs');
const userContainer = document.querySelector('#users');
var count = 0;
var userId;

var userName;
var firstName;
var lastName;
var imageURL;

document.addEventListener("DOMContentLoaded", function() {
  const user = document.createElement('div');
  user.classList.add('user');
  user.innerHTML = `
    <div class="user-header">
      <img src="../images/1.png" alt="Profile picture">
      <h2>Kevin Joseph</h2>
    </div>
    <p> Last seen online at 10:00 pm </p>
  `;
  userContainer.append(user);
  const user2 = document.createElement('div');
  user2.classList.add('user');
  user2.innerHTML = `
    <div class="user-header">
      <img src="../images/3.png" alt="Profile picture">
      <h2>Govind Rajkumar</h2>
    </div>
    <p>Last seen online at 9:00 pm</p>
  `;
  userContainer.append(user2);
});




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
        userId = 2;
        firstName = 'Devika';
        lastName = 'Salimkumar';
        userName = firstName + ' ' + lastName;
        const msg = document.createElement('div');
        msg.classList.add('msg-else');
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
      count = 0;
  }
  
});
