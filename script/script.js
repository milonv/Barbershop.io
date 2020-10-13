//burger menu

let header__burger = document.querySelector('.header-burger');
let header_menu = document.querySelector('.b-nav');
let back = document.querySelector('body');
let basket = document.querySelector('.header-basket-small');

header__burger.onclick = function(){
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
  basket.classList.toggle('active');
}

//slider for mobile

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//slider for tablet and desktop

/* Индекс слайда по умолчанию */
let photoIndex = 2;
showPhotos(photoIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusPhoto() {
  showPhotos(photoIndex += 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showPhotos(photoIndex = n);
}

/* Основная функция сладера */
function showPhotos(n) {
  let i;
  let photos = document.getElementsByClassName("photo");

  if (n > photos.length) {
    photoIndex = 1
  }
  if (n < 1) {
    photoIndex = photos.length
  }

  for (i = 0; i < photos.length; i++) {
    photos[i].className = photos[i].className.replace(" active", "");
  }
 
  photos[photoIndex - 1].className += " active";
}

//slider for products

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next-product");
let btnPrev = document.getElementById("prev-product");
let slider = document.querySelector("div.slider-cosmetic");
let viewSlide = 0;



btnNext.addEventListener("click", function () {

  if (viewSlide < 4) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }

    slider.style.left = -viewSlide * viewport + "px";

});

btnPrev.addEventListener("click", function () {

    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 4;
    }

    slider.style.left = -viewSlide * viewport + "px";
});


