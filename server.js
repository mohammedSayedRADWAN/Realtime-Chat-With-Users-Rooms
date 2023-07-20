const express=require('express')
const path=require('path')
const http=require('http')
const socketio=require('socket.io')
const {userJoin,getCurrntUser,userLeave,getUserRooms}=require('./utlis/user')

const app=express();
const server=http.createServer(app)
const io=socketio(server)
const formatMessage=require('./utlis/messages')
const botName='chatCord Bot'
// set static files
app.use(express.static(path.join(__dirname,'public')))

//run when clients connect
io.on('connection',socket=>{
  //when user join to chat room
  socket.on('joinRoom',({username ,room})=>{
    const user=userJoin(socket.id,username ,room)
    console.log(user);
    socket.join(user.room)
  socket.emit('message',formatMessage(botName,'welcom to chatCord!'))
  //Broadcast when user connect
  socket.broadcast.to(user.room).emit('message',formatMessage(botName,`${user.username} has join to chat`))
  io.to(user.room).emit('roomUsers',{
    room: user.room,
    users: getUserRooms(user.room)
  })
})

socket.on('chatMessage',(Msg)=>{
  const user=getCurrntUser(socket.id)
  io.to(user.room).emit('message',formatMessage(user.username,Msg))
})

  //run when clint leave chat
socket.on('disconnect',()=>{
  const user=userLeave(socket.id)
  if(user){
    io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left chat`))
  }
})
})



const PORT=3000 || process.env.PORT
server.listen(PORT,()=>{
console.log(`Server renning on port: ${PORT}`);
})