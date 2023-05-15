const form = document.querySelector('form');
const msgInput = document.querySelector('#msg-input');
const msgsContainer = document.querySelector('#msgs');
var count = 0;


var userName;
var firstName;
var lastName;
var imageURL;



form.addEventListener('submit', (event) => {
  event.preventDefault();
  const msgContent = msgInput.value;
  if(count == 0){
    if (msgContent.trim() !== '') {
        const msg = document.createElement('div');
        msg.classList.add('msg');
        msg.innerHTML = `
          <div class="msg-header">
            <img src="../images/kevin-dp-circle.png" alt="Profile picture">
            <h2>Kevin Joseph</h2>
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
        const msg = document.createElement('div');
        msg.classList.add('msg');
        msg.innerHTML = `
          <div class="msg-header">
            <img src="../images/govind-dp-circle.png" alt="Profile picture">
            <h2>Govind Rajkumar</h2>
          </div>
          <p>${msgContent}</p>
        `;
        msgsContainer.append(msg);
        msgInput.value = '';
      }
      count = 0;
  }
  
});
