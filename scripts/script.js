// script.js
import { productCard } from "./utils.js";
import { productData } from "./productData.js";
import { footerTxt } from "./utils.js";
import { carouselSlide } from "./utils.js";
import { setupSearchPopup } from "./search.js";

const cardContainer = document.querySelector('.container');

productData.forEach(product => {
    const card = productCard(product);
    cardContainer.appendChild(card);
});

const footer = document.querySelector('.footer');
const footertagWrap = document.createElement('div');
footertagWrap.className = "footer_tag_wrap";
 
footerTxt.forEach(link => {
    const footerTag = document.createElement('a');
    footerTag.className = "footer_link";
    footerTag.textContent = link.text;
    footerTag.href = link.path;
    footerTag.target = "_blank";

    footertagWrap.appendChild(footerTag);
    footer.appendChild(footertagWrap)
});

const carouselContainer = document.querySelector('.carousel');

carouselSlide.forEach(slide => {
    const slides = document.createElement('div');
    slides.className = "slides";
    slides.style.backgroundImage = `url('${slide.img}')`;
    const h1 = document.createElement('h1');
    h1.textContent = slide.heading;
    const p = document.createElement('p');
    p.textContent = slide.desc;
    const a = document.createElement('a');
    a.href = slide.btn;
    a.target = "_blank";
    const button = document.createElement('button');
    button.className = slide.btnClass;
    button.innerHTML = "Click to Know More";
        
    slides.appendChild(h1);
    slides.appendChild(p);
    a.appendChild(button);
    slides.appendChild(a);

    carouselContainer.appendChild(slides);
});

document.addEventListener("DOMContentLoaded", () => {
    setupSearchPopup();
});