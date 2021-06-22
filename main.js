(perspectiveHover = () => {
  const intensity = 12;
  const cardElement = document.querySelector(".card");

  cardElement.addEventListener("mousemove", (e) => {
    const el = e.target;
    const elX = el.offsetLeft;
    const elY = el.offsetTop;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const rotateY = -(((elWidth / 2 - (mouseX - elX)) / (elWidth / 2)) * intensity);
    const rotateX = ((elHeight / 2 - (mouseY - elY)) / (elHeight / 2)) * intensity;

    el.style.transition = "";
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  cardElement.addEventListener("mouseout", (e) => {
    e.target.style.transition = ".5s";
    e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
})();
