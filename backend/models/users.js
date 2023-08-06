const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    
    user : {
        type : 'String',
        unique : true,
        upperCase : true,
        trim : true,
    },
    pass : {
        type : 'String',
        unique : false,
        trim : true
    }
})

// muto el objeto antes de devolver para que devuelva lo que quiero, no se muta en el de la bd , sino antes de devolverlo
usersSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = mongoose.model('User',usersSchema)


// // get all the data of data base 
// User.find({}).then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })



//  const user = new User({
//     user:'ale',
//     pass: '123'
// })


// user.save()
// .then(result => {
//     console.log(result)
//     mongoose.connection.close()
// }).catch(error => {
//     console.log(error)
// })


module.exports = User