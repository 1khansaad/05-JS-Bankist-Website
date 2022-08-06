'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// adding and removing cookies message

const header = document.querySelector('.header')
const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = 'We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message)
header.append(message)

const x = document.querySelector('.btn--close-cookie')
x.addEventListener('click', function(){
  message.remove()
})

// style 

message.style.backgroundColor = '#37383d'
message.style.width = '100%'

// smooth scrolling

const btnScrolTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')

btnScrolTo.addEventListener('click', function(e){
  // const sec1Coords = section1.getBoundingClientRect();
  // console.log(sec1Coords)
  
  // console.log(e.target.getBoundingClientRect())

  // console.log('current scroll(x/y)', window.pageXOffset, window.pageYOffset)

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

  // // scroll

  // // window.scrollTo(sec1Coords.left + window.pageXOffset, sec1Coords.top + window.pageYOffset)
  // window.scrollTo({
  //   left : sec1Coords.left + window.pageXOffset,
  //   top : sec1Coords.top + window.pageYOffset,
  //   behavior : 'smooth'
  // })

  section1.scrollIntoView({behavior : 'smooth'})
})

