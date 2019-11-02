const add = (a, b, callback) => {
    const res = a+b
    callback(res)
}

add(1, 4, (sum)=>{
    console.log(sum)
})