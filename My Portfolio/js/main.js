window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCards, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.remove("active");
        });
    });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentTheme());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

window.addEventListener("scroll", () =>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

  sectionHeight.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else{
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
   });
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration : 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02', { delay: 1, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 5, origin: 'right'});
ScrollReveal().reveal('.home .info btn', { delay: 5, origin: 'bottom'});
ScrollReveal().reveal('.media .icons i, .contact-left li', { delay: 5, origin: 'left', interval: 50});
ScrollReveal().reveal('.home-img, about-img', { delay: 5, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .copy-right', { delay: 5, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', { delay: 5, origin: 'right', interval: 50});
ScrollReveal().reveal('.skills-description, service-description, .contact-card, contact-left h2', { delay: 5, origin: 'left'});
ScrollReveal().reveal('.service-card, .img-card, education', { delay: 5, origin: 'bottom', interval: 50});
ScrollReveal().reveal('.footer .group', { delay: 5, origin: 'top', interval: 50});