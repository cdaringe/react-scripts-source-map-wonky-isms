var b = { c: 10 }
var a = { b }
const { b: { c } } = a

console.log(c === 10)
