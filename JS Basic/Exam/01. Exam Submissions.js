function examSubmissions(arg1, arg2) {
    let studentCount = Number(arg1)
    let tasksCount = Number(arg2)

    let submissions = Math.ceil((tasksCount * 2.8))
    let allSubmissions = studentCount * submissions
    //allSubmissions *= 2.8
    let additional = studentCount * (Math.floor((tasksCount / 3)))
    let fullSubmittions = allSubmissions + additional
    let memory = Math.ceil(fullSubmittions / 10)
    memory = 5 * memory
    console.log(`${memory} KB needed`)
    console.log(`${fullSubmittions} submissions`);


}
examSubmissions('25', '10')