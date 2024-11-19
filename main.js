document.querySelector(".button_check_id").addEventListener("click", () => {
  const userId = document.querySelector(".id_box_real").innerText;

  if (userId.length < 32) {
    alert("ID가 너무 짧습니다! 보안을 위해 32글자 이상으로 만들어주세요");
  }
});
