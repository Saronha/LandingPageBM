//tutorial seguido para o menu sanduiche:
//https://www.youtube.com/watch?v=bHRXRYTppHM

class MenuSanduiche{
    constructor(menuMobile, navList, navLinks){
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks); 
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this); //depois tentar substituir isso por arrow functions
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    handleLinkClick(){
        this.navList.classList.remove(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuMobile.addEventListener("click", this.handleClick);
        this.navLinks.forEach(link => {
            link.addEventListener("click", this.handleLinkClick.bind(this));
        });
    }

    init(){
        if(this.menuMobile){
            this.addClickEvent();
        }return this;
    }
}

const mobileNavbar = new MenuSanduiche(
    ".menu-sanduiche",
    ".lista-nav",
    ".lista-nav li",
);

mobileNavbar.init()

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const d = e.target.getAttribute('data-delay') || 0;
      e.target.style.animationDelay = d + 'ms';
      e.target.classList.add('revelacao-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.revelacao').forEach((el) => io.observe(el));