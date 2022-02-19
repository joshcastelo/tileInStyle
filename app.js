const navElements = {
    toggleBtn: document.querySelector('.toggle'),
    navMenu: document.querySelector('.navbar__menuitems'),
};

navElements.toggleBtn.addEventListener('click', function(){
    if(!navElements.navMenu.classList.contains('navbar__menuitems__show')){
        navElements.navMenu.classList.add('navbar__menuitems__show');
        navElements.toggleBtn.classList.remove('fa-bars');
        navElements.toggleBtn.classList.add('fa-xmark')
    } else if (navElements.navMenu.classList.contains('navbar__menuitems__show')){
        navElements.navMenu.classList.remove('navbar__menuitems__show');
        navElements.toggleBtn.classList.add('fa-bars');
        navElements.toggleBtn.classList.remove('fa-xmark')
    }
})

const introElements = {
    sliderImg: document.querySelector('.introduction__img'),
    introImages: [
        'Images/intro background.jpeg',
        'Images/intro background2.jpeg'
    ]
}
