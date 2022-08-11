// PRELOADER
window.onload = function () {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
  setTimeout(showElements, 200)
}

function showElements() {
  document.querySelector('.navbar-logo').style.transform = 'translateX(0)';
  document.querySelector('.navbar-links').style.transform = 'translateX(0)';
  document.querySelector('.social-media-icons').style.transform = 'translateX(0)';
  document.querySelector('.fa-bars-header').style.transform = 'translateX(0)';
  document.querySelector('.intro-div-image').style.transform = 'translateY(0)';
  document.querySelector('.intro-div-text').style.transform = 'translateY(0)';

}

// REVEAL ELEMENT ON SCROLL

window.addEventListener('scroll', function () {
  let windowHeight = window.innerHeight;
  let revealPoint = 150;
  // Transform X Animation
  let TransformXElements = document.querySelectorAll('.transform-x-elements');
  for (let a = 0; a < TransformXElements.length; a++) {
    if (TransformXElements[a].getBoundingClientRect().top < windowHeight - revealPoint) {
      TransformXElements[a].classList.add('add-remove-transform-x');
    }
  }
  // Opacity Animation
  let OpacityElements = document.querySelectorAll('.opacity-elements');
  for (let b = 0; b < OpacityElements.length; b++) {
    if (OpacityElements[b].getBoundingClientRect().top < windowHeight - revealPoint) {
      OpacityElements[b].classList.add('add-remove-opacity');
    }
  }
  // 
  let navbar = $('.navbar'),
    scroll = $(window).scrollTop();
  if (scroll >= 40) {
    navbar.addClass('fixed');
  }
  else {
    navbar.removeClass('fixed');

  }
}
);
// navigation icon and mobile header
document.querySelector('.fa-bars-header').addEventListener('click', function () {
  document.querySelector('.navbar-links-mobile').classList.add('show-mobile-header');
});

document.querySelector('.fa-times-header').addEventListener('click', function () {
  document.querySelector('.navbar-links-mobile').classList.remove('show-mobile-header');
});

// custom cursor

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})

let cursorChange = document.querySelectorAll('.cursor-change');
for (let c = 0; c < cursorChange.length; c++) {
  cursorChange[c].addEventListener('mouseover', function () {
    cursor.classList.add('remove-bg-from-cursor');
  });
  cursorChange[c].addEventListener('mouseleave', function () {
    cursor.classList.remove('remove-bg-from-cursor');
  });
}

// one page navigation

let aboutLink = document.querySelector('.about-link');
let workLink = document.querySelector('.work-link');
let testimonialsLink = document.querySelector('.testimonials-link');
let faqsLink = document.querySelector('.faqs-link');

// For Mobiles
let aboutLinkMobile = document.querySelector('.about-link-mobile');
let workLinkMobile = document.querySelector('.work-link-mobile');
let testimonialsLinkMobile = document.querySelector('.testimonials-link-mobile');
let faqsLinkMobile = document.querySelector('.faqs-link-mobile');

let aboutSection = document.querySelector('.about-section');
let workSection = document.querySelector('.work-section');
let testimonialsSection = document.querySelector('.testimonials-section');
let faqsSection = document.querySelector('.faqs-section');

aboutLink.addEventListener('click', function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
workLink.addEventListener('click', function () {
  workSection.scrollIntoView({ behavior: "smooth" });
});
testimonialsLink.addEventListener('click', function () {
  testimonialsSection.scrollIntoView({ behavior: "smooth" });
});
faqsLink.addEventListener('click', function () {
  faqsSection.scrollIntoView({ behavior: "smooth" });
});

// FOR MOBILES
aboutLinkMobile.addEventListener('click', function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
  document.querySelector('.navbar-links-mobile').classList.remove('show-mobile-header');
});
workLinkMobile.addEventListener('click', function () {
  workSection.scrollIntoView({ behavior: "smooth" });
  document.querySelector('.navbar-links-mobile').classList.remove('show-mobile-header');
});
testimonialsLinkMobile.addEventListener('click', function () {
  testimonialsSection.scrollIntoView({ behavior: "smooth" });
  document.querySelector('.navbar-links-mobile').classList.remove('show-mobile-header');
});
faqsLinkMobile.addEventListener('click', function () {
  faqsSection.scrollIntoView({ behavior: "smooth" });
  document.querySelector('.navbar-links-mobile').classList.remove('show-mobile-header');
});

// faq script 

// questions
let question_1 = document.querySelector('.question-1');
let question_2 = document.querySelector('.question-2');
let question_3 = document.querySelector('.question-3');
let question_4 = document.querySelector('.question-4');

// answers
let answer_1 = document.querySelector('.answer-1');
let answer_2 = document.querySelector('.answer-2');
let answer_3 = document.querySelector('.answer-3');
let answer_4 = document.querySelector('.answer-4');

question_1.addEventListener('click', function () {
  $(answer_1).slideToggle();
  // to hide other aswers
  $(answer_2).slideUp();
  $(answer_3).slideUp();
  $(answer_4).slideUp();
  // slide down 

})
question_2.addEventListener('click', function () {
  $(answer_2).slideToggle();
  // to hide other aswers
  $(answer_1).slideUp();
  $(answer_3).slideUp();
  $(answer_4).slideUp();
})
question_3.addEventListener('click', function () {
  $(answer_3).slideToggle();
  // to hide other aswers
  $(answer_2).slideUp();
  $(answer_1).slideUp();
  $(answer_4).slideUp();
})
question_4.addEventListener('click', function () {
  $(answer_4).slideToggle();
  // to hide other aswers
  $(answer_2).slideUp();
  $(answer_3).slideUp();
  $(answer_1).slideUp();
})


//dynamic copyright

let d = new Date();
let year = d.getFullYear();
document.querySelector(".copyright-year").innerHTML = year;

// TESTIMONIALS

const slides = document.querySelectorAll(".slide-item");
const nextBtn = document.querySelector(".arrow-next");
const prevBtn = document.querySelector(".arrow-prev");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 120}vw`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 120}vw)`;
  });
}
