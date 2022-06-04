
const express = require('express')
const cors = require('cors')
const app = express();

const port = 9090;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.get('/api/userinfo', cors(), (req, res) => {
    return res.send(JSON.stringify({ success: true }))
})

app.post('/api/userinfo', (req, res) => {
    return res.send(JSON.stringify([
        {
            "id": "38b2bd58-658b-4ef7-b68d-53e1119246c9",
            "name": "Левомеколь",
            "count": 3,
            "description": "Мазь от заражений",
            "expirationDate": "2023-09-11",
            "userInfo": null
        }
    ]))
})

app.listen(port, () => {
    console.log('Server started port ->' + port);
});

