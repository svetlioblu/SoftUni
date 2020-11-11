function browserHistory(object, array) {
    for (let line of array) {
        let command = line.match(/^\S+/)[0]
        let app = line.match(/\s(.*)/)[1]

        if (command === 'Open') {
            object["Open Tabs"].push(app)
            object["Browser Logs"].push(line)
        } else if (command === 'Close') {
            if (!object["Open Tabs"].includes(app)) {
                continue
            }
            let indexOfOpened = object["Open Tabs"].indexOf(app)
            object["Recently Closed"].push(app)
            object["Open Tabs"].splice(indexOfOpened, 1)
            object["Browser Logs"].push(line)
        } else if (line === 'Clear History and Cache') {
            object["Open Tabs"].length = 0
            object["Recently Closed"].length = 0
            object["Browser Logs"].length = 0
        }
    }
    
    console.log(`${object["Browser Name"]}\nOpen Tabs: ${object["Open Tabs"].join(', ')}\nRecently Closed: ${object["Recently Closed"].join(', ')}\nBrowser Logs: ${ object["Browser Logs"].join(', ')}`)
    
}
browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]


)