// Data e slider-it
const slides = [
  {
    image: 'img/pexels-cottonbro-7037424.jpg',
    subtitle: 'Urban Edge',
    title: 'Jackets for the Modern Man',
    button: 'Discover Now'
  },
  {
    image: 'img/2.jpg',
    subtitle: 'Casual Style',
    title: 'Comfort for Everyday Life',
    button: 'Shop Now'
  },
  {
    image: 'img/3.jpg',
    subtitle: 'Winter Essentials',
    title: 'Stay Warm with Style',
    button: 'Explore Collection'
  }
];

let currentSlide = 0;

// Elementët e DOM për slider-in
const sliderImage = document.getElementById('slider-image');
const sliderSubtitle = document.getElementById('slider-subtitle');
const sliderTitle = document.getElementById('slider-title');
const sliderButton = document.getElementById('slider-button');
const prevSlideButton = document.getElementById('prev-slide');
const nextSlideButton = document.getElementById('next-slide');

// Funksioni për të përditësuar slajdin
function updateSlide(index) {
  if (slides[index]) {
    sliderImage.src = slides[index].image;
    sliderSubtitle.textContent = slides[index].subtitle;
    sliderTitle.textContent = slides[index].title;
    sliderButton.textContent = slides[index].button;
  } else {
    console.error(`Slide me indeks ${index} nuk ekziston.`);
  }
}

// Event listeners për navigimin në slider
if (prevSlideButton && nextSlideButton) {
  prevSlideButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
  });

  nextSlideButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
  });
} else {
  console.error("Butonat e shigjetave nuk janë gjetur në DOM.");
}

// Ngarkimi i slajdit të parë
if (sliderImage && sliderSubtitle && sliderTitle && sliderButton) {
  updateSlide(currentSlide);
} else {
  console.error("Elementët e slider-it nuk janë gjetur në DOM.");
}

// Logout
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
} else {
  console.error("Butoni i logout-it nuk është gjetur në DOM.");
}

// Kontrolli i login/logout
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
  alert('Please log in to access this page.');
  window.location.href = 'login.html';
}

// Funksioni për të shtuar produkt në shportë
function addToCart(id, title, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.some(product => product.id === id)) {
    alert(`${title} is already in your cart!`);
    return;
  }
  cart.push({ id, title, price, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${title} has been added to your cart!`);
}

// Debugging për shportën
function debugCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log("Current cart contents:", cart);
}
debugCart();

// Auto slider
setInterval(() => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  updateSlide(currentSlide);
}, 5000);

// Modal për "Contact Us"
const contactUsLink = document.getElementById('contactUsLink');
const contactModal = document.getElementById('contactModal');
const closeModalButton = document.getElementById('closeModal');

if (contactUsLink && contactModal && closeModalButton) {
  contactUsLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.classList.remove('hidden');
  });

  closeModalButton.addEventListener('click', () => {
    contactModal.classList.add('hidden');
  });

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.add('hidden');
    }
  });
} else {
  console.error("Elementët e modal-it për kontakt nuk janë gjetur.");
}

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
