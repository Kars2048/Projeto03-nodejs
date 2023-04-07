const express = require("express")

const router = express.Router();
router.get('/' ,(req, res) => {
    res.send("Olá Mundo")
});

router.get('/rota1' ,(req, res) => {
    res.send("Rota 1")
});

router.get('/rota2' ,(req, res) => {
    res.send("Deu erro mané...")
});

const app = express();
app.use('/', router);

module.exports = app;