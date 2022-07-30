// PRELOADER
window.onload = function () {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
}

// 
setTimeout(function () {
  document.querySelector('.navbar-logo').style.transform = 'translateX(0)';
  document.querySelector('.navbar-links').style.transform = 'translateX(0)';
  document.querySelector('.social-media-icons').style.transform = 'translateX(0)';
  document.querySelector('.intro-div-image').style.transform = 'translateY(0)';
  document.querySelector('.intro-div-text').style.transform = 'translateY(0)';
}, 1000)

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

// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ana De Armas",
    job: "Graphic Designer",
    img:
      "https://media1.popsugar-assets.com/files/thumbor/firPcY1Js9KD9Q61UZedbpwIxe0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/04/01/894/n/1922153/tmp_GD89YR_5189df5a5434a91a_GettyImages-1343719310.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Monica Bellucci",
    job: "Photographer",
    img:
      "https://i.pinimg.com/originals/04/62/ed/0462edc8c9a74cd05b4f9a6fa5c79ac9.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Al Pacino",
    job: "Illustrator",
    img:
      "https://vintagenewsdaily.com/wp-content/uploads/2018/02/3.bp_.blogspot.comyoung-al-pacino-1-9c1b51bf3c838ba4c566872d6f191cdc60a93563.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.lorem ispum ispum lorem alien.",
  },
  {
    id: 4,
    name: "Robert Pattinson",
    job: "Enterpreneur",
    img:
      "https://media1.popsugar-assets.com/files/thumbor/iLNUcDNN3wIBCFX6bEfgKldd-6Q/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/10/724/n/1922398/d747c388598c8868682ec3.33000292_edit_img_image_43862198_1502380970/i/Hot-Robert-Pattinson-Pictures-2017.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items
const img = document.querySelector(".person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
