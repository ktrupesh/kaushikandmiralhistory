// togler menu 
const toggler = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("ul");
        
toggler.addEventListener('click' , () => {
    toggler.classList.toggle("active");
    navMenu.classList.toggle("active");
});