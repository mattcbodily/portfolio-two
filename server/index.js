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

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));