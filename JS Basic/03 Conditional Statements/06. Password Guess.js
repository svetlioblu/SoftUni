function passwordGuess(arg) {

    let comparePass = arg
    let password = 's3cr3t!P@ssw0rd'
    if (comparePass == password) {

        console.log('Welcome')

    } else {
        console.log('Wrong password!')

    }
}

passwordGuess('s3cr3t!P@ssw0ssd')
