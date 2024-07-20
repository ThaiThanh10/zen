// Menu Mobile 

var $nav = document.querySelector('header .hamburger-lines');
var $menu = document.querySelector('header .menu')
$nav.addEventListener('click', showMenu);
function showMenu() {
    $menu.classList.toggle('active');
    $nav.classList.toggle('active');
}

var $link = document.querySelectorAll('header .menu .container-menu ul a')
$link.forEach(element => {
    element.addEventListener('click', showMenu)
});

// Languages 

var $icondown = document.querySelector('header .icondown')
var $currentlang = document.querySelector('header .currentlang ')
var $dropdown = document.querySelector('header .dropdown')
var $langitem = document.querySelectorAll('header .dropdown span')

function openlang() {
    $dropdown.classList.toggle('active');
    $icondown.classList.toggle('active');
}

$langitem.forEach(element =>
    element.addEventListener('click', function chooselang() {
        $currentlang.innerHTML = element.innerHTML;
        $dropdown.classList.remove('active');
    }
    )
)

$icondown.addEventListener('click', openlang)


// About Slider 

var elemAbout = document.querySelector('.main-carousel.aboutSlider');
var flkty = new Flickity(elemAbout, {
    cellAlign: 'left',
    contain: true,
    draggable: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 3,
    pageDots: true,
});

// Services Slider

const sliderServices = document.querySelector('.main-carousel.test');

const flktyServices = new Flickity(sliderServices, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    draggable: true,
});

// Project Slider 

const sliderProject = document.querySelector('.main-carousel.projectSlider');

const flktyProject = new Flickity(sliderProject, {
    prevNextButtons: true,
    draggable: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 3,
});

//Team Slider 
const sliderTeam = document.querySelector('.main-carousel.teamSlider')
const flktyTeam = new Flickity(sliderTeam, {
    prevNextButtons: true,
    draggable: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 3,
});



// Animation gsap;


var tl = new gsap.timeline();

tl.to("#header", { y: 0, opacity: 1, duration: 0.8 });
tl.to("#banner", { y: 0, opacity: 1, duration: .7 });

const tlWho = gsap.timeline({
    scrollTrigger: {
        trigger: ".triggerWho",
        start: "center bottom",
        end: "center top",
        scrub: true,
        markers: true,
    }
});


const tlService = gsap.from("#service", {
    duration: 1.3,
    x: -300,
    opacity:0,
    scrollTrigger: {
        trigger: '.triggerServices',
        toggleActions: 'restart none none none',
        markers: true,

    },
}
)


gsap.fromTo("#works", {
    duration: 1.3,
    x: 300,
    opacity:0,
},
{   
    x:0,
    opacity:1,
    scrollTrigger: {
        trigger: '.triggerWorks',
        toggleActions: 'restart none none none',
        markers:true,
    }
}
)









