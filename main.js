let lis = document.querySelectorAll("ul li");
let experiments = document.querySelector(".experiment");
// window.localStorage.clear();
if (window.localStorage.getItem("color")) {
  //add color to div
  experiments.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  //add active class to current color
  document
    .querySelector(`[data-color ="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color)
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
    experiments.style.backgroundColor = e.target.dataset.color;
  });
});
