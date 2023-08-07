require('dotenv').config();
require('./mongoConfig/db')
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const usersRoutes = require('./routes/userRoutes');

const app = express();
app.use('/api', usersRoutes);

app.get('/',(req,res) => {
  res.send("THIS WORKS !!")
})

app.use(bodyParser.json());
app.use(cookieParser)
// app.use(session({
//   secret: 'secret',
//   key: 'key',
//   resave:false,
//   saveUninitialized:false,
//   store: MongoStore.create({mongoUrl:'mongodb+srv://fishingAdmin:gUBffhcx1FG4ZoUH@tiendacluster.rsy4efw.mongodb.net/virtualShop'})
// }))



const port = process.env.PORT || 3002;
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  module.exports = app