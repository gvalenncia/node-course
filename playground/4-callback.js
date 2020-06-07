const add = (a, b, callback) => {
    const res = a+b
    callback(res)
}

add(1, 4, (sum)=>{
    console.log(sum)
})

const doWorkCallback = (callback) => {
    setTimeout(()=>{
        callback("this is a string", undefined, "asdfaf")
        callback(undefined, "pailander 0 vidas")
    }, 2000)
}

doWorkCallback((success, error) => {
    if(error){
        console.log('there was an error')
    } else {
        console.log(success)
    }
})