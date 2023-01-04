const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", getSections);
function getSections() {
  const triggerBottom = (window.innerHeight / 10) * 9;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

const timeline = document.querySelector(".timeline");
const line = document.querySelector(".line");
let prevScrollY = window.scrollY;
let up,
  down = false;
let set = 0;
const targetY = window.innerHeight * 0.9;

function scrollHandler(e) {
  up = window < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const dist = targetY - timelineRect.top;
  if (down) {
    line.style.bottom = `calc(100% - ${dist}px)`;
  }
}
scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
