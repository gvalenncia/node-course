const doWorkPromise = new Promise((resolve, reject) => {
    //resolve('this is a resolve')
    reject('this is a rejection')
})

doWorkPromise.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.error(reject)
})