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

    addClickEvent(){
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.menuMobile){
            this.addClickEvent();
        }return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-sanduiche",
    ".lista-nav",
    ".lista-nav li",
);

mobileNavbar.init()