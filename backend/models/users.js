const mongoose = require('mongoose')
// require('../mongoConfig/db')  para la creacion manual inicial de datos en la db

const usersSchema = new mongoose.Schema({
   
    user : {
        type : 'String',
         unique:true,
        trim : true,
    },
    pass : {
        type : 'String',
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

// para la creacion manual inicial de datos en la db
//
//  const data = new User({
//         user: 'Claudia',
//         pass: 'marAzul'
//     })
//     const data2 = new User({
//         user: 'Alejandra',
//         pass: 'free'
//     })
    
//     const data3 = new User({
//         user:'ale',
//         pass: '12345'
//     })
    
    
    

//     data.save()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })
    
//     data2.save()
//     .then(result => {
//         console.log(result)
        
//     })
//     .catch(err => {
//         console.log(err)
//     })

//     data3.save()
//     .then(result => {
//         console.log(result)
        
//     }).catch(error => {
//         console.log(error)
//     })

// // get all the data of data base 
// User.find({}).then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })



 


module.exports = User