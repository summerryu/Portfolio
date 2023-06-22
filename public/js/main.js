const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

const sections = [section1,section2,section3];
const menus = document.querySelectorAll("#header .center .gnb li");

window.addEventListener("scroll", () => {
    let scTop = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
      const offsetTop = sections[i].offsetTop;
      if (scTop >= offsetTop) {
        for (let j = 0; j < menus.length; j++) {
          menus[j].classList.remove("on");
        }
        menus[i].classList.add("on");
      }
    }
});
  
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", (event) => {
        event.preventDefault();
      for (let j = 0; j < menus.length; j++) {
        menus[j].classList.remove("on");
      }
      menus[i].classList.add("on");
      window.scrollTo({
        top:sections[i].offsetTop,
        behavior:"smooth"
        })
    });
}