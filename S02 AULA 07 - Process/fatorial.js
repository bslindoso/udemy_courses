console.log("n-fatorial")

// console.log(`Diretório do script ${process.cwd()}`)
// process.on('exit', () => {
//     console.log('script está prestes a terminar')
// })

const fatorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * fatorial (num - 1)
}

// console.log(process.argv)

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é ${fatorial(num)}`)