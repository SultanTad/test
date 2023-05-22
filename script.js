//Slider Animation
new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 5,
});
//End Slider Animation

//Scroll Animation

document.addEventListener("DOMContentLoaded", () => {
  let imageSection = document.querySelector(".second-section__image");
  let descriptionSection = document.querySelector(
    ".second-section__description"
  );
  let aboutUsDescription = document.querySelector(
    ".about-us-section__description"
  );
  let aboutUsImage = document.querySelector(".about-us-section__image");
  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    console.log(windowCenter);
    if (windowCenter >= 900) {
      imageSection.classList.add("animation-class");
      descriptionSection.classList.add("animation-class");
    } else {
      imageSection.classList.remove("animation-class");
      descriptionSection.classList.remove("animation-class");
    }
    if (windowCenter >= 2070) {
      aboutUsDescription.classList.add("animation-class");
      aboutUsImage.classList.add("animation-class");
    } else {
      aboutUsDescription.classList.remove("animation-class");
      aboutUsImage.classList.remove("animation-class");
    }
  };
  scrollAnimation();
  window.addEventListener("scroll", () => {
    scrollAnimation();
  });
});
