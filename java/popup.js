var btnabrirpopup = document.getElementById('Abrir'),
    overlay = document.getElementById('modal'),
    popup = document.getElementById('popup');
    btncerrarpopup = document.getElementById('cerrar-popup');

btnabrirpopup.addEventListener('click', function(){
    Abrir.classList.add('active');
});
