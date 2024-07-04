
function f1(c) {
    var p = document.getElementsByTagName("h1");
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = c;
    }
}