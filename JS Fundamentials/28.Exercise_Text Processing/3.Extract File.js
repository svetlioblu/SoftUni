function extractFile(str) {
    let index = str.lastIndexOf('\\')
    let substr = str.substring(index + 1)
    substr = substr.split('.')
    if (substr.length > 2) {
        let extension = substr.pop()
        console.log(`File name: ${substr.join('.')}\nFile extension: ${extension}`)
        
    } else {
        console.log(`File name: ${substr[0]}\nFile extension: ${substr[1]}`)
    }

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')