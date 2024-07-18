const property = {
    label: "Red Book",
    price: 30,
    stock: 200
}

const { label, price, stock } = property
console.log(price, label)

const { label: Notelable, pages = 300 } = property
console.log(Notelable, pages)
