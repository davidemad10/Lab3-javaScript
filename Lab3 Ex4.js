//Ex:4
function autoScroll(){
    window.scrollBy(0,3)
    setTimeout(autoScroll,500)
}
window.onload=autoScroll()