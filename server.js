
const express = require('express')
const cors = require('cors')
const app = express();

const port = 9090;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next()
})

app.get('/api/userinfo', cors(), (req, res) => {
    return res.send(JSON.stringify({ success: true }))
})

app.post('/api/userinfo', (req, res) => {
    return res.send(JSON.stringify({
        "email": "gandzha@ya.com",
        "medicine": [
            {
                "name": "Инфо",
                "count": "3",
                "description": "Мазь от заражений",
                "expirationDate": "2023-09-11"
            }
        ]
    }))
})

app.listen(port, () => {
    console.log('Server started port ->' + port);
});

