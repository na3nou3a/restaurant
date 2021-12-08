export const navigation = (id) => {
  const nav = document.createElement('nav');
  if (id == 'home') {
    nav.innerHTML = `
  <a class="active text-title" id="home" href="#">Home</a>
  <a class='text-title' id="menu" href="#">Menu</a>
  <a class='text-title' id="contact" href="#">Contact</a>
  `;
    return nav;
  }
  if (id == 'menu') {
    nav.innerHTML = `
  <a class='text-title' id="home" href="#">Home</a>
  <a class="active text-title" id="menu" href="#">Menu</a>
  <a class='text-title' id="contact" href="#">Contact</a>`;
    return nav;
  }
  nav.innerHTML = `
  <a class='text-title' id="home" href="#">Home</a>
  <a class='text-title' id="menu" href="#">Menu</a>
  <a class="active text-title" id="contact" href="#">Contact</a>`;
  return nav;
};
