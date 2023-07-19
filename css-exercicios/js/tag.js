const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    Header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    getTag(tagName){
        return this[tagName] ? this[tagName] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(tag => {
    const tagName = tag.tagName.toLowerCase()

    tag.style.borderColor = colors.getTag(tagName)

    if (!tag.classList.contains('noLabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.getTag(tagName)
        label.innerHTML = tagName
        tag.insertBefore(label, tag.childNodes[0])
    }
})