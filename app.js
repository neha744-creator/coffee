const MainMenu = document.querySelector('.MainMenu');
const CloseMenu = document.querySelector('.CloseMenu');
const OpenMenu = document.querySelector('.OpenMenu');
const menu_items = document.querySelectorAll('nav .MainMenu li a');




OpenMenu.addEventListener('click',show);
CloseMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})
function show(){
    MainMenu.style.display = 'flex';
    MainMenu.style.top = '0';
}
function close(){
    MainMenu.style.top = '-100%';
}