const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/registro',(req,res)=>res.sendFile(path.join(__dirname,'views','registro.html')));
app.get('/carritoDeCompras',(req,res)=>res.sendFile(path.join(__dirname,'views','carritoDecompras.html')));
app.get('/detalleDeProducto',(req,res)=>res.sendFile(path.join(__dirname,'views','detalleDeProducto.html')));
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname,'views','404.html')));

app.listen(PORT, ()=>console.log(`server running in http://localhost:${PORT}`));
