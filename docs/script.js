var scroll = new SmoothScroll();

function scrollToShape(color) {
  const sectionId = `${color}Section`;
  const section = document.getElementById(sectionId);

  if (section) {
    scroll.animateScroll(section, null, { speed: 500 });
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    scroll.animateScroll(section, null, { speed: 500 });
  }
}

