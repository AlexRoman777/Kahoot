function scrollToShape(color) {
  const sectionId = `${color}Section`;
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView();
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView();
  }
}

