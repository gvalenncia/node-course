//Object shorthand

const name = 'German'
const age = 35

const user = {
    name,
    ageTales: age
}

console.log(user)

//Object destructirung

const product = {
    label: 'tales',
    price: 3
}

const {label: labelProduct, price} = product

console.log(labelProduct)
console.log(price)

const transaction = (type, {label, price}) => {
    console.log(label)
    console.log(price)
}

transaction('order', product)