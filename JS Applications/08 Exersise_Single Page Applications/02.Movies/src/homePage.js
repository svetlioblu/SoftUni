let main;
let section;

export async function setUpHome(mainTarget, sectionTarget) {
    mainTarget = main
    sectionTarget = section
}

export async function showHome(main, section) {
    main.innerHTML = ''
    main.appendChild(section)
}