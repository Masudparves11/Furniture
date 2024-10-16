

AOS.init();


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar1").style.padding = "12px 0px 0px 0px";
  } else {
    document.getElementById("navbar1").style.padding = "0px 0px 10px 0px";
    
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 200, 500);
  counter("count2", 0, 500, 500);
  counter("count3", 0, 400, 300);
 });
 



 const images = document.querySelectorAll(".img1")

function clearActiveImage() {
    images.forEach(function(image) {
        image.classList.remove("active1");
    });
}

images.forEach(function(image, index) {
    image.onclick = function () {
        event.stopPropagation()
        if(images[index].classList.contains("active1")){
            images[index].classList.remove("active1")
        } else {
            clearActiveImage(index)
            images[index].classList.add("active1")
        }
    }
})

window.addEventListener("click", () => {
    clearActiveImage()
})



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    240: {
      slidesPerView: 1,
    },
    
  },
});


const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});