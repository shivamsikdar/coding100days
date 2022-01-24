//Object oriented challenge 2

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  console.log(frontEnd, backEnd)
  console.log('----------------------------------------------------------- ')
  
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [
  name,
  [html, css, js, react],
  [htmlScore, cssScore, jsScore, reactScore]
] = student
console.log(
  name,
  html,
  css,
  js,
  react,
  htmlScore,
  cssScore,
  jsScore,
  reactScore
);
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  
//   one way
  const convertArrayToObject = arr => {
    const newArray = []
    for (const [name, skills, scores] of arr) {
      newArray.push({ name, skills, scores })
    }
    return newArray
  }
  
//   another way
  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  const convertArrayToObject = arr =>
    arr.map(([name, skills, scores]) => {
      return { name, skills, scores }
    })
  
  console.log(convertArrayToObject(students))