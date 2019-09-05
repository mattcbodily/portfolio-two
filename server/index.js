require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected')
}).catch(err => console.log(err))

//message endpoint
app.post('/api/message', function(){
    const {name, email, message} = req.body;
    const db = req.app.get('db');
    
    db.post_message(name, email, message)
    .then(res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));