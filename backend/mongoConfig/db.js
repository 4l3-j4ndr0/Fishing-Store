const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser:true})
.then(() => {
    console.log('Successful connection to the database')
}).catch(error => {
    console.log(error);
})


