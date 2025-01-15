window.onload = function () {
  // 모달창 닫기
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // 비주얼 버튼
  const visualButton = document.querySelector(".visual-bt");
  visualButton.addEventListener("click", function () {
      scrollToSection("#business")
    //   여기는 고유한 id 로만 써야함. #business 가 밑에 sectionId 를 사용하고 있는 거임.
  });
  // scrollToSection()
  function scrollToSection(sectionId) {
    // #business 를 그냥 쓸 수 없어서 sectionId 라는 임의의 이름값을 줌
    console.log(sectionId);
    const section = document.querySelector(sectionId);
    if(section){
        section.scrollIntoView({behavior:"smooth"})
    }
    // #budiness 로 이동하기 위한 함수
  }
//   gotop 버튼
const topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click", function(event){
    event.preventDefault()
    // a에는 무조건 있어야 하는 명령. 디폴트 값을 초기화 해줌.
    window.scrollTo({
        top:0 , 
        behavior: "smooth",
    })
})
};
