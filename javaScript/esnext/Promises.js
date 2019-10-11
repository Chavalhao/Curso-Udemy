function falardepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // aceita um unico parametro
                //reject chama o catch
        }, segundos * 1000)
    })
}

falardepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e))