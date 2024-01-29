
const express = require("express");
const app = express();
const puerto = 3001
const bodyParser = require("body-parser")


app.use(bodyParser.json());
//objeto de contactos
//Use se ejecuta para cualquier petición 
app.use("/contactos", (request, response, next) => {
    console.log("Ingrese a middleware");
    console.log("Headers", request.headers);
    console.log("Body", request.body);
    next();
});

app.get("/contactos", (request, response) => {
    const contactos = [
        { id: 1, nombre: "Kevin", apellido: "Jaramillo", celular: "0980217599" },
        { id: 2, nombre: "Kev", apellido: "Jaramillo", celular: "0980217599" },
        { id: 3, nombre: "Jer", apellido: "Jaramillo", celular: "0980217599" },
        { id: 4, nombre: "Javier", apellido: "Jaramillo", celular: "0980217599" },
        { id: 5, nombre: "Stalin", apellido: "Jaramillo", celular: "0980217599" }
    ]
    //RESPUESTA 200 con send
    response.send(contactos)
});
app.post("/contactos", (req, resp) => {

    req.body.id = 99;
    //RESPUESTA 200 con send
    resp.send(req.body)
});
app.put("/contactos/:idParam", (req, resp) => {
    const id = req.params.idParam
    console.log("id: ", id);
    //RESPUESTA 200 con send
    resp.send(req.body)
});
app.delete("/contactos/:id", (req, resp) => {
    const id = req.params.id;
    console.log("id: ", id);
    //RESPUESTA 200 con send
    resp.send({ id: id });
});
app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + 3001);
});
