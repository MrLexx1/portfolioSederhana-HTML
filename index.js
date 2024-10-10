const name = prompt("Siapa Nama Mu");

alert(`Hello ${name}`);

const links = document.querySelectorAll("nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
