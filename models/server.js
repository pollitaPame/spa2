const express = require ('express');

class Server {
  constructor(){
    this.app = express();
    this.puerto = process.env.PORT;
    this.middleware();
  }
  middleware(){
    this.app.use('/', express.static('public'));
  }

  escuchar(){
    this.app.listen(this.puerto, () =>{
      console.log(`Conexión exitosa en el puerto ${this.puerto}`);
    });
  }
}

module.exports = Server;