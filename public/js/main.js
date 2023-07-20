//get chat form
const chatForm=document.getElementById('chat-form');
const chatMessages=document.querySelector('.chat-messages');
const roomName=document.getElementById('room-name');
const userList=document.getElementById('users');


//access to userName ,room from URL with qs 
const {username ,room}=Qs.parse(location.search,{
  ignoreQueryPrefix:true
})
const socket=io();
//join to chat room
socket.emit('joinRoom',{username,room})
//Get room and users 
socket.on('roomUsers',({room,users})=>{
outputRoomName(room);
outputUsers(users)
})
socket.on('message',message=>{
  console.log("from main.js "+message);
  outputMessage(message)
  // for show last messages are sent
  chatMessages.scrollTop=chatMessages.scrollHeight

  //scrollHeight is Height of form chat
  //scrollTop is Height of scroll or distance from top(=0) to currnt elemnt show in window
  console.log('scroll Height= '+chatMessages.scrollHeight);
  console.log('scroll Top= '+chatMessages.scrollTop);
})
//Message submit
chatForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  //get message text
  const Msg=e.target.elements.msg.value
  socket.emit('chatMessage',Msg)
  //clear input text after submit
  e.target.elements.msg.value=''
  e.target.elements.msg.focus()
}) 
function outputMessage(message) {
  const div=document.createElement('div')
  div.classList.add('message');
  div.innerHTML=`	<p class="meta">${message.userName} <span>${message.time}</span></p>
  <p class="text">
    ${message.text}.
  </p>`
  document.querySelector('.chat-messages').appendChild(div)
}
function outputRoomName(room) {
  roomName.innerText=room
}
function outputUsers(users) {
userList.innerHTML=`
${users.map(user=>`<li>${user.username}</li>`).join('')}
`
}