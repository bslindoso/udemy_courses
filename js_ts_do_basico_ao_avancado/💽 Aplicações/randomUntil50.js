const random = [];
let tries = 0;

while (!random.includes(50)) {
  random.push(generateRandom());
  tries++;
}

console.log(`Finnaly 50 in ${tries} tries! Numbers: ${random}`)

function generateRandom() {
  return Math.ceil((Math.random() * 50))
}