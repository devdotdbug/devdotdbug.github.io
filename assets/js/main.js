window.onscroll = function() {changeTopNavOnScroll();};

var header = document.getElementById("topNavigation");

var sticky = header.offsetTop;

function changeTopNavOnScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
}





function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



//For hero
var hero = document.getElementById('hero-text');
window.addEventListener('scroll', function() {
  if (isElementInViewport(hero)) {
    hero.classList.add('animate');
  } else {
    hero.classList.remove('animate');
  }
});

//For contact section
var contact = document.getElementById('contact-section');
window.addEventListener('scroll', function() {
  if (isElementInViewport(contact)) {
    contact.classList.add('animate');
  } else {
    contact.classList.remove('animate');
  }
});

//For blog projects preview
var projectFrame = document.getElementsByClassName('project-frame');
var i;
var el;
var len = projectFrame.length;
window.addEventListener('scroll', function() {
  for(i = 0; i < len; i++) {
    el = projectFrame[i];
    if (isElementInViewport(el)) {
      el.classList.add('animate');
    } else {
      el.classList.remove('animate');
    }
  }
});

//For hub-video
var hubVideo = document.getElementById('hub-video');
window.addEventListener('scroll', function() {
  if (isElementInViewport(hubVideo)) {
    hubVideo.classList.add('animate');
  } else {
    hubVideo.classList.remove('animate');
  }
});

function navigateSection(id) { document.getElementById(id).scrollIntoView(true); }
function backToTop() { window.scroll({top:0}); }