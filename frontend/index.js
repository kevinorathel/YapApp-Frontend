const form = document.querySelector('form');
const msgInput = document.querySelector('#msg-input');
const msgsContainer = document.querySelector('#msgs');
var count = 0;

document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        console.log(event.key);
        alert("Oh nice this works!");
    }
})

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
        msgsContainer.prepend(msg);
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
        msgsContainer.prepend(msg);
        msgInput.value = '';
      }
      count = 0;
  }
  
});
