# Realtime-Chat-With-Users-Rooms
  This application built using Node.js, Express, Socket.io,moment
  
![Screenshot (307)](https://github.com/mohammedSayedRADWAN/Realtime-Chat-With-Users-Rooms/assets/105266056/e4eec9a4-f57c-4ca1-b06f-437918f207c6)
![Screenshot (308)](https://github.com/mohammedSayedRADWAN/Realtime-Chat-With-Users-Rooms/assets/105266056/2ce8b910-ce17-4b3b-ba64-583ccc7cf573)

# Features
  <li>Uses Express as the application Framework.</li> 
  <li>Real-time communication between a client and a server using Socket.io.</li>
   
   
# Installation

### Running Locally

Make sure you have Node.js and npm install.

  1. Clone or Download the repository 
    <pre>git clone https://github.com/mohammedSayedRADWAN/Realtime-Chat-With-Users-Rooms.git
    $ cd Real-Time-Chat-Application</pre>
  2. Install Dependencies
      <pre>npm install</pre>
  
  3. Start the Application
     <pre>npm run dev</pre>
  Application runs from localhost:3000.
      
## How It Works

  A database called "chat_db" named is created via code. 
  The nickname, msg, group information is also kept in the table named Messages.
    
  User to user, As a publication broadcast or group in the room  messaging.
  User to user messaging:
   <pre> /w username messagetext</pre> the message is sent as.
      
 ## Sockets
    
   Having an active connection opened between the client and the server so client can send and receive data. This allows             real-time communication using TCP sockets. This is made possible by Socket.io.

   The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 


    
  
  


