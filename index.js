const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require('./db')

app.set('port', 4500);
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', require('./routes/routes'));


const server = app.listen(app.get('port'),()=>{
    console.log('Trabajando en el puerto..',app.get('port'));
});

//Websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket)=>{
    console.log('Se ha conectado alguien', socket.id);

    socket.on('chat:message',(data)=>{
        console.log(data);
        io.sockets.emit('chat:message',data);
    });

})