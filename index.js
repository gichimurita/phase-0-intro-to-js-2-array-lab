const cats = ["Milo","Otis","Garfield"]
console.log(cats);

let catslength = (cats.length)
console.log(catslength);

cats.push("Ralph");
console.log(cats)

cats.unshift ("Bob");
console.log(cats)

cats.pop()
console.log(cats)

cats.shift()
console.log(cats)

const coolcats = [...cats]
console.log(coolcats)
const newcats = [...coolcats,"Broom"]
console.log(newcats)
const bcats =["Arnold",...coolcats];
console.log(bcats)

cats.slice(-1);
console.log(cats)

cats.slice(1);
console.log(cats)