const  express = require('express');
const router = express.Router();
const ApiNodeCorreios = require('node-correios');

const correios = new ApiNodeCorreios();
router.post("/", (req, res) => {
    const { cep } = req.body;
    correios.consultaCEP({ cep }). then ((result) => {
        return res.json(result);
    }).catch((error) => {
        return res.json(error);
    });

});

module.exports = router;
