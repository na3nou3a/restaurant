export const footer = () => {
  const year = new Date().getFullYear();
  const footter = document.createElement('footer');
  footter.innerHTML = `<p>&copy; ${year}</p>`;
  return footter;
};
