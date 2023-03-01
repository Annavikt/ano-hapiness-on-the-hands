let slidesP1 = document.querySelectorAll('.project1_photoes .slider_item');
let btnPrevP1 = document.querySelector('.project1_photoes .slider_prev');
let btnNextP1 = document.querySelector('.project1_photoes .slider_next');
slider(slidesP1,btnPrevP1,btnNextP1);
function slider (slides,btnPrev,btnNext) {

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
       }
    slides[slideIndex - 1].style.display = 'block';
} 

function plusSlide(n) {
    showSlides(slideIndex += n);
}

btnPrev.addEventListener('click', function () {
    plusSlide(-1);
});
btnNext.addEventListener('click', function () {
    plusSlide(1);
});
};

let slidesP2 = document.querySelectorAll('.project2_photoes .slider_item');
let btnPrevP2 = document.querySelector('.project2_photoes .slider_prev');
let btnNextP2 = document.querySelector('.project2_photoes .slider_next');
slider(slidesP2,btnPrevP2,btnNextP2);

let slidesP3 = document.querySelectorAll('.project3_photoes .slider_item');
let btnPrevP3 = document.querySelector('.project3_photoes .slider_prev');
let btnNextP3 = document.querySelector('.project3_photoes .slider_next');
slider(slidesP3,btnPrevP3,btnNextP3);

let slidesP4 = document.querySelectorAll('.project4_photoes .slider_item');
let btnPrevP4 = document.querySelector('.project4_photoes .slider_prev');
let btnNextP4 = document.querySelector('.project4_photoes .slider_next');
slider(slidesP4,btnPrevP4,btnNextP4);

let slidesP5 = document.querySelectorAll('.project5_photoes .slider_item');
let btnPrevP5 = document.querySelector('.project5_photoes .slider_prev');
let btnNextP5 = document.querySelector('.project5_photoes .slider_next');
slider(slidesP5,btnPrevP5,btnNextP5);

let slidesE1 = document.querySelectorAll('.event1_photoes .slider_item');
let btnPrevE1 = document.querySelector('.event1_photoes .slider_prev');
let btnNextE1 = document.querySelector('.event1_photoes .slider_next');
slider(slidesE1,btnPrevE1,btnNextE1);

let slidesE2 = document.querySelectorAll('.event2_photoes .slider_item');
let btnPrevE2 = document.querySelector('.event2_photoes .slider_prev');
let btnNextE2 = document.querySelector('.event2_photoes .slider_next');
slider(slidesE2,btnPrevE2,btnNextE2);

let slidesE3 = document.querySelectorAll('.event3_photoes .slider_item');
let btnPrevE3 = document.querySelector('.event3_photoes .slider_prev');
let btnNextE3 = document.querySelector('.event3_photoes .slider_next');
slider(slidesE3,btnPrevE3,btnNextE3);

let slidesE4 = document.querySelectorAll('.event4_photoes .slider_item');
let btnPrevE4 = document.querySelector('.event4_photoes .slider_prev');
let btnNextE4 = document.querySelector('.event4_photoes .slider_next');
slider(slidesE4,btnPrevE4,btnNextE4);


let articles = document.querySelector('.publications_wrapper');
let dots = document.querySelectorAll('.dots')[0];
let moreText = document.querySelectorAll('.more')[0];
let btnText = document.querySelectorAll('.article_button')[0];


let dots1 = document.querySelectorAll('.dots')[1];
let moreText1 = document.querySelectorAll('.more')[1];
let btnText1 = document.querySelectorAll('.article_button')[1];

let dots2 = document.querySelectorAll('.dots')[2];
let moreText2 = document.querySelectorAll('.more')[2];
let btnText2 = document.querySelectorAll('.article_button')[2];

let dots3 = document.querySelectorAll('.dots')[3];
let moreText3 = document.querySelectorAll('.more')[3];
let btnText3 = document.querySelectorAll('.article_button')[3];

let dots4 = document.querySelectorAll('.dots')[4];
let moreText4 = document.querySelectorAll('.more')[4];
let btnText4 = document.querySelectorAll('.article_button')[4];

let dots5 = document.querySelectorAll('.dots')[5];
let moreText5 = document.querySelectorAll('.more')[5];
let btnText5 = document.querySelectorAll('.article_button')[5];


getArticleInfo(dots,moreText,btnText);
getArticleInfo(dots1,moreText1,btnText1);
getArticleInfo(dots2,moreText2,btnText2);
getArticleInfo(dots3,moreText3,btnText3);
getArticleInfo(dots4,moreText4,btnText4);
getArticleInfo(dots5,moreText5,btnText5);



function getArticleInfo(dots, moreText, btnText) {
// readMore()
function readMore() {
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btnText.innerHTML = 'Читать полностью'
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btnText.innerHTML = 'Скрыть текст';
        btnText.style.bottom = '0px';
    }
}
btnText.addEventListener('click', readMore);
}


const btnUp = { 
    el: document.querySelector('.footer_arrow'),
    show() {
        this.el.classList.remove('footer_arrow_hide')
    },
    hide() {
        this.el.classList.add('footer_arrow_hide')
    },
    addEventListener() {
        window.addEventListener('scroll',() =>
        {const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.footer_arrow').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.smooth'));

document.querySelector('.burger_menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav_menu').classList.toggle('open');
})

document.querySelectorAll('.nav_menu ul li').forEach((el) => {
    el.addEventListener('click', function() {
    document.querySelector('.nav_menu').classList.remove('open');
    document.querySelector('.burger_menu').classList.remove('active');
    })
})

