const express = require('express');

//igual a  -> express from express mas precisa do "type": "module" no package.json


const app = express();
const port = 3000;
app.use (express.json());

require("./src/routes/index")(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


