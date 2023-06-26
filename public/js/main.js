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



const portFolioList = document.querySelectorAll(".swiper-slide .btn");
// console.log(portFolioList[0].querySelectorAll("li"))

// const portFolioText = document.querySelectorAll(".swiper-slide");
const portFolioText = document.querySelectorAll(".swiper-slide .textbox");
// console.log(portFolioText[0].querySelectorAll(".text_list"))



for(let i=0; i<portFolioList.length; i++){

    for(let j=0; j<portFolioList[i].querySelectorAll("li").length; j++){
     
        portFolioList[i].querySelectorAll("li")[j].addEventListener("click",(e)=>{
            e.preventDefault();

            for(let k=0; k<portFolioList[i].querySelectorAll("li").length; k++){
              portFolioText[i].querySelectorAll(".text_list")[k].classList.remove("change");
              portFolioList[i].querySelectorAll("li")[k].classList.remove("change");
            }
            
            portFolioText[i].querySelectorAll(".text_list")[j].classList.add("change")
            portFolioList[i].querySelectorAll("li")[j].classList.add("change")
        })
    }
}




$(function() {
  const imageGroups = [
    {
      sizeUPSelector: ".sizeUP",
      mainImgSelector: ".main_img"
    },
    {
      sizeUPSelector: ".sizeUP2",
      mainImgSelector: ".main_img2"
    },
    {
      sizeUPSelector: ".sizeUP3",
      mainImgSelector: ".main_img3"
    }
  ];

  imageGroups.forEach(function(group) {
    let currentIndex = 0;
    const $sizeUP = $(group.sizeUPSelector);
    const $mainImg = $(group.mainImgSelector);
    const images = $sizeUP.find("img");
    let timerId = null;

    // 이미지 클릭 이벤트
    $sizeUP.on("click", function() {
      const src = $(this).find("img").attr("src");
      changeImage(src, $mainImg, $sizeUP);
      currentIndex = $sizeUP.index(this);
    });
  });

  // 이미지 변경 함수
  function changeImage(src, $mainImg, $sizeUP) {
    $mainImg.fadeOut(400, function() {
      $mainImg.attr("src", src).fadeIn(400);
    });
  }
});