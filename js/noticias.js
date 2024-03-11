var noticia = sessionStorage.getItem('noticia');

var not1 = document.getElementById('not-1');
var not2 = document.getElementById('not-2');
var not3 = document.getElementById('not-3');
var not4 = document.getElementById('not-4');

function noticiaSelecionada(not) {
    var noticia = {
        1: () => not1.style.display = 'block',
        2: () => not2.style.display = 'block',
        3: () => not3.style.display = 'block',
        4: () => not4.style.display = 'block',
    }
    
    return noticia[not]()
}
noticiaSelecionada(noticia);

