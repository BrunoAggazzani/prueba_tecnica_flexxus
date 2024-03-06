const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

// Imprime los elementos de "y" que no se encuentran en "x"
console.log(y.filter(elemento => !x.includes(elemento)));
