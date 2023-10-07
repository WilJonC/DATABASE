const express = require('express');
const usersRouter = require('./routes/users')
class Server {
    constructor() {
        this.app = express();       // SE INSTACIA EXPRESS
        this.port = 3000;       //DEFINIMOS EL PUERTO

        //Paths     http://localhost:3000/api/v1
        this.basePath = '/api/v1';      //RUTA BASE

        this.usersPath = `${this.basePath}/users`;      //Path PARA LA TABLA
        

        this.middlewares();     //INVOCAION DE LOS MIDDLEWARES

        this.routes();      //INVOCAION DE LAS RUTAS
    }

    
    middlewares(){
        this.app.use(express.json());       //PARA PODER INTERPRETAR EL FORMATO JSON
    }

    routes(){
        this.app.use(this.usersPath, usersRouter);      //ENDPONIT DE USERS
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log("Server listening on port" +this.port)
        });
    }
}

module.exports = Server;