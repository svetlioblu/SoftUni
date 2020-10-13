function projectsCreation(fNamme, projects) {
    //"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
    let architectName = fNamme
    let numberOfProjects = Number(projects)
    let workingHours = numberOfProjects * 3
    let result = `The architect ${architectName} will need ${workingHours} hours to complete ${numberOfProjects} project/s.`
    console.log(result)


}
projectsCreation("Geotge", "4")