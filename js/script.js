let menuBtn = document.getElementById('menu-btn');
let menuBtnImg = document.getElementById('menu-btn-img');
let nav = document.querySelector('.nav');
console.log(nav.classList);

menuBtn.addEventListener('click', () => {
  menuBtnImg.classList.toggle('active');
  nav.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menuBtnImg.classList.remove('active');
  nav.classList.remove('active');
});


const title = [
  'Discover innovative ways to decorate',
  'We are available all across the globe',
  'Manufactured with the best materials',
];
const descriptions = [
  'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  "With stores all over the worldm it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch neares you using our store locator. Any question? Don't hesitate to contact us today.",
  'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understood what customers want for their home and office.',
];
var slideIndex = 1;
showSlider(slideIndex);

function plusSlider(n) {
  showSlider((slideIndex += n));
}

function showSlider(n) {
  var i;
  var slider = document.getElementsByClassName('slide');
  var titleText = document.getElementById('title');
  var descriptionText = document.getElementById('description');
  titleText.classList.add('hide');
  descriptionText.classList.add('hide');
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slider[slideIndex - 1].style.display = 'block';
  setTimeout(() => {
    titleText.innerHTML = title[slideIndex - 1];
    descriptionText.innerHTML = descriptions[slideIndex -1];
    titleText.classList.remove('hide');
    descriptionText.classList.remove('hide');
  }, 250)
}
