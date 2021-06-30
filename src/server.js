import 'dotenv/config';
import express from 'express'
import router from './route'
const server= express();

server.use( express.json() );
server.use( router ) 
server.listen( process.env.PORT,() => console.log("servidor rodando! "))