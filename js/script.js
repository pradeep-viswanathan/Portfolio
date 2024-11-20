const typed = new Typed('.typed-text', {
    strings: ['Web Developer.','Software developer.','FrontEnd developer.','Fresher exploring opportunities.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
//nav-bar-icon
// const navBarIcon = document.querySelector('.nav-bar-icon');
// const navLinks = document.querySelector('.nav-links');

// navBarIcon.addEventListener('click',()=>{
//     navLinks.classList.toggle('active');
// })

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// document.querySelector("primary-btn").onclick = function () {
//   location.href = "#about";
// };


//---------------animate journey section--------------------
function journeyAnimation(){
  const timeLineItem = document.querySelectorAll('.timeline-item');
  timeLineItem.forEach((item,index) =>{
    setTimeout(() => {
      item.classList.add('animate');
    }, index*200);
  });
};
//function to check if an element is in viewport
function isViewPort(element){
  const rect = element.getBoundingClientRect();
  return(
    rect.top >= 0 &&
    rect.left >=0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
//function to handle scroll animation
function scrollAnimation(){
  const timeLineItem = document.querySelectorAll('.timeline-item');
  timeLineItem.forEach((item)=>{
    if (isViewPort(item)) {
      item.classList.add('animate');    
    }
    else {
      item.classList.remove('animate');
    }
  });
};
//add scroll event listener
window.addEventListener('scroll', scrollAnimation);
//initial check on page
window.addEventListener('load', scrollAnimation);

//--------------------skills section--------------------------//
function animateSkill(){
  const skillBar = document.querySelectorAll('.skill-progress');
  skillBar.forEach(bar=>{
    if (isViewPort(bar) && !bar.style.width) {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage+'%';
      const percentageSpan = bar.parentElement.previousElementSibling.querySelector('.skill-percentage');
      let count=0;
      const interval = setInterval(() => {
        if (count >= parseInt(percentage)) {
          clearInterval(interval);
        }
        else {
          count++;
          percentageSpan.textContent = count + '%';
        }
      }, 20);
      
    }
  })
}
//add scroll event listener
window.addEventListener('scroll', animateSkill);
//initial check on page
window.addEventListener('load', animateSkill);

//back-to-top feature
// Back to Top Button Logic
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});
