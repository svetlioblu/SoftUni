function foreignLanguages(lang) {
    let language = lang

    switch (language) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish')
            break
        case 'Italy':
            console.log('Italian');
            break
        default:
            console.log('unknown');
    }
}
foreignLanguages('Mexico')