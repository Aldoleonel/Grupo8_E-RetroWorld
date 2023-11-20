const burguerMenu = document.getElementById('burguerMenu');
const switchChange = document.getElementById('joystick-toggle')

burguerMenu.addEventListener('click',function(){

    const linksMenu = document.querySelector('.header__links');

    linksMenu.classList.toggle('showLinks')
    
})

