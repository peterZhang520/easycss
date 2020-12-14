export default function setRem(UEwidth) {
     
    var doc = document.documentElement
    doc.style.fontSize = (100 / UEwidth) + 'vw'
}