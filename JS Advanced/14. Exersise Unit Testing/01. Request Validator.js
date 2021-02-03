function validator(obj) {
    const method = ['GET', 'POST', 'DELETE', 'CONNECT']
    if (obj.method == undefined || obj.method == '' || !method.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    const regURI = /^([a-zA-Z0-9\.\*]+)$/gm
    if (obj.uri == undefined || obj.uri == '' || !regURI.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (obj.uri == undefined || obj.uri == '' || !version.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }
    let regMessage = /[\<\>\\\&\'\"]/gm
    if (obj.message == undefined || regMessage.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return (obj)
}
console.log(validator({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
))