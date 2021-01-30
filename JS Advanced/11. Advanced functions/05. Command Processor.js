function solution() {
    let str = ''
    return {
        append: (modify) => { str += modify },
        removeStart: (n) => { str = str.substring(n) },
        removeEnd: (n) => { str = str.slice(0, -n) },
        print: () => { console.log(str) }
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

