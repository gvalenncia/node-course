const square = function(a){
    return a * a
}

const squareA = (x) => {
    return x * x
}

const squareB = (x) => x * x

const event = {
    name: 'birthday party',
    printGuestList() {
        console.log('list: ' + this.name)
    }
}