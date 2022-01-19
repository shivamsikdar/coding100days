// Array challenge 3
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const createArrayOfArrays = arr =>
arr.map(country =>{
    let name = country[0] + country.slice(1).toLowerCase()
    return [name, country.toUpperCase().slice(0, 3), country.length]
})
console.log(createArrayOfArrays(countries));