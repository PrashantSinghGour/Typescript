

const add = (value1: number| string, value2: number | string): number | string  => {
if( typeof value1 === 'string' && typeof value2 === 'string') {
  return value1 + value2;
} else {
  return +value1 + +value2;
}
}


console.log(add('My name is ', 'Prashant'));

console.log(add(1, 7))
