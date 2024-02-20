// funcionalidad menu
const nav = document.querySelector('#nav');
const cerrar = document.querySelector('#cerrar');
const abrir = document.querySelector('#abrir');

abrir.addEventListener('click', ()=>{
    nav.classList.add('visible');
    abrir.classList.add('hidden');
});

cerrar.addEventListener('click', ()=>{
    nav.classList.remove('visible')
    abrir.classList.remove('hidden');
})
