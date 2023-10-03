var btnabrirpopup = document.getElementById('Abrir'),
    overlay = document.getElementById('modal');
    popup = document.getElementById('popup');
    btncerrarpopup = document.getElementById('cerrar-popup');

btnabrirpopup.addEventListener('click', function(){
    overlay.classList.add('active');
});

btncerrarpopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});





