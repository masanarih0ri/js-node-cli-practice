const argv = require('minimist')(process.argv.slice(2))
console.log(typeof argv)
console.log(argv['_'])
const arguments = argv['_']
const msg = `Hello!! ${arguments[0]} san.`
const readline = require('readline')

if (arguments.length === 0) {
  console.error('Please pass one argument!!')
  process.exit(1)
} else {
  console.log(msg);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Please enter names for your project: ', (answer) => {
  console.log(`Thank you!! Let's start ${answer}`);
  rl.close()
})