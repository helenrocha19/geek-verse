
 function abrirNoticia(id) {
    console.log('funcao abrirNoticia', id);
    sessionStorage.setItem('noticia', JSON.stringify(id))
    window.location.href = "noticias.html";
}

