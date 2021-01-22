function editElement(ref, text, replace) {
    let changed = ref.textContent.replace(new RegExp(text,'g'), replace)
    ref.innerHTML = changed
}