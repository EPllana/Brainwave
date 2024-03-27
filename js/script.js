const swiper = new Swiper('#mySlider', {
  // Optional parameters
  direction: 'horizontal',
  //loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },

  // Navigation arrows
  navigation: {
      nextEl: '#mySlider .swiper-button-next',
      prevEl: '#mySlider .swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
});


swiper.on('slideChange', function (swiper) {
  console.log(swiper);
  console.log('slide changed');
});

const swiperMultiple = new Swiper('#multipleSlides', {
  // Optional parameters
  direction: 'horizontal',
  //loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },

  // Navigation arrows
  navigation: {
      nextEl: '#multipleSlides .swiper-button-next',
      prevEl: '#multipleSlides .swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
});// Dëgjuesi i ngjarjes DOMContentLoaded për të siguruar që të gjitha elementet e DOM-it janë ngarkuar para se të ekzekutohet JavaScript-i
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const trialButton = document.getElementById('trial-button');
    // Ktheje ikonën e menysë dhe shfaq ose fsheh lidhjet e navigimit kur ikona e menysë klikohet
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('bx-menu');
        menuIcon.classList.toggle('bx-x');
        
       
    });
// Shfaq ose fsheh lidhjet e navigimit kur butoni i provës klikohet
    trialButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
  
        menuIcon.classList.toggle('bx-menu');
        
    });
    // Kopjo një element me id-në 'card__body1' dhe shtoje atë në trupin e dokumentit
    const originalElement = document.getElementById('card__body1');
    if (originalElement) {
        const clonedElement = originalElement.cloneNode(true);


        document.body.appendChild(clonedElement);
    }

});
// Dëgjuesi i ngjarjes së shkrollimit të dritares
window.addEventListener('scroll', function() {
    var yPos = window.scrollY;
    if (yPos > 300) {
// Kryej veprime kur pozicioni i shkrollimit është më i madh se 300 piksela
    }
  });
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
// Shfaq modalin kur pozicioni i shkrollimit është më i madh se 3500 piksela
  window.onscroll = function() {
    if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
      modal.style.display = "block";
    }
  };
// Mbyll modalin kur butoni i mbylljes klikohet
  span.onclick = function() {
    modal.style.display = "none";
    window.onscroll = function() {
        if (!modalShown && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
          modal.style.display = "block";
        }
      };
  };
// Mbyll modalin kur klikohet jashtë tij
 window.onclick = function(event) {
    if (eventevent.target == modal) {
        modal.style.display = "none";
      }
  };
  window.addEventListener('scroll', () => {
 const section = document.querySelector('.your-section-class');
  const sectionTop = section.getBoundingClientRect().top;
  const isVisible = sectionTop < window.innerHeight;

  if (isVisible) {
    section.classList.add('fade-in');
  }
});
