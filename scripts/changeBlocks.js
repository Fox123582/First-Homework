export function createColors (data){
    const containerForColors = $('.conForColors')
    $(data).each((i,el)=>{
        let createDivs = $('<div></div>')
        $(createDivs).addClass(`${el.img}`)
        createDivs.css('background-color', `${el.color}`)
        createDivs.appendTo(containerForColors)
        firstActive(createDivs)
        clickColor(el,createDivs)
    })
}
function firstActive(firstDiv){
    if ( $(firstDiv).hasClass('black')) $(firstDiv).addClass('active')
}
function resetActive(){
    const allDiv = $('.conForColors div')
    $(allDiv).each((i,elem)=>{
        if ($(elem).hasClass('active')) $(elem).removeClass('active')
    })
}
function clickColor(el,elDiv){
    $(elDiv).on('click',() =>{
        resetActive()
        $(elDiv).addClass('active')
        changeTitle(el)
        changeImage(el)
    })
}
function changeTitle(el){
    const titleColors = $('.color')
    $(titleColors).text(`${el.title}`)
}

function changeImage(el){
    const image = $('.teslaImg')
    $(image).attr('src',`https://mc-astro.github.io/tesla-roadster-colors/img/${el.img}.jpg`)
}