const d = document.getElementById("image");
const element = document.getElementById("bl4");

element.addEventListener("scroll", () => {
  console.log(d.offsetTop);
  d.classList.add("show");
});
