const menuhamburger = document.getElementById('menu-hamburger');
menuhamburger.addEventListener('click', ()=>{
    toggleMenu();
});

function toggleMenu(){
    const nav = document.getElementById('nav-responsive');
    menuhamburger.classList.toggle('change');

if(menuhamburger.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}