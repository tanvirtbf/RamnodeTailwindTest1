var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      360:{
          slidesPerView: 1.14,
      },
      576: {
          slidesPerView: 1.7,
      },
      768: {
          slidesPerView: 2.2,
      },
      992: {
          slidesPerView: 3,
      }
    
    }
  });

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const faqs = document.querySelectorAll('.FAQ1');
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

const input = document.getElementById("myInput");
const button = document.getElementById("myButton");

input.addEventListener("input", () => {
if (input.value.length > 0) {
  button.disabled = false;
  button.style.backgroundColor = 'black'
} else if(input.value.length<0) {
  button.disabled = true; 
}

});

button.addEventListener('click',()=>{
button.style.backgroundColor = '#4A4A4A'
})