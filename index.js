const arr = [ 1, 2, 3, 5 ]

const reduce = arr.reduce((acc, count) => acc + count, 5)

const reduceMultiplication = arr.reduce((acc, count) => acc * count)

console.log(reduce)
console.log(reduceMultiplication)
