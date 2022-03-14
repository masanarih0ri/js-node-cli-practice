
const argv = require('minimist')(process.argv.slice(2))
const readline = require('readline')

module.exports = () => {
  const arguments = argv['_']
  const msg = `Hello!! ${arguments[0]} san.`

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
}