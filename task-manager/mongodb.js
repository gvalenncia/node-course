const mongodb = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

mongodb.MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client)=>{
    if(error){
        console.log('Unable to connect')
    }
    console.log('connection OK')

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'german',
    //     age: 36
    // },(error, result)=>{
    //     if(error){
    //         console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'hacer oficio',
    //         completed: false
    //     },
    //     {
    //         description: 'definir tareas',
    //         completed: false
    //     },
    //     {
    //         description: 'curso node',
    //         completed: false
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         console.log('unable to insert task')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks')
        .findOne(new mongodb.ObjectID('5edbfaca65f3df1f480fffb0'), (error, result) => {
          if(error){
              console.log('unable to find object')
          }
          console.log(result)
        })
    
    db.collection('tasks')
        .find({completed: false}).toArray((error, result) => {
            if(error){
                console.log('unable to find tasks')
            }
            console.log(result)
        })
    
    db.collection('tasks')
    .updateMany({ completed: false }, {
        $set: {
            completed: true
        }
    }).then((resolve) => {
        console.log(resolve.matchedCount)
    }).catch((reject) => {
        console.error(reject)
    })

    db.collection('tasks')
    .deleteOne({_id:new mongodb.ObjectID('5edbfaca65f3df1f480fffb0')})
    .then((resolve)=>{
        console.log('deleted')
    }).catch((reject) => {
        console.log("there was a problem to delete task", reject)
    })
})