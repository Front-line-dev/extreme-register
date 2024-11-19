let validMap = {
  ID: false,
  PASSWORD: false,
  // agree: false,
};

let firstTry = false;

document.querySelector(".button_submit").addEventListener("click", () => {
  if (validMap.ID === false || validMap.PASSWORD === false) {
    alert("완료하지 않은 단계가 있습니다");
    return;
  }

  if (!firstTry) {
    document.querySelector(".popup").classList.add("active");
    firstTry = true;
    return;
  }

  alert("회원가입 성공");
});

document.querySelector(".button_submit").addEventListener("mouseover", () => {
  if (validMap.ID === false || validMap.PASSWORD === false) {
    return;
  }

  if (!firstTry) {
    setTimeout(() => {
      document.querySelector(".popup").classList.add("active");
      firstTry = true;
    }, 150);
  }
});

document.querySelector(".button_check_id").addEventListener("click", () => {
  const userId = document.querySelector(".id_box_real").innerText;

  if (userId.length < 30) {
    alert("ID가 너무 짧습니다! 보안을 위해 30글자 이상으로 만들어주세요");
  } else {
    alert("안전한 인터넷 생활에 더 가까워졌습니다");
    validMap.ID = true;
  }
});

function maskPassword(event) {
  document.querySelector(".label_password_text").innerText = "🙏".repeat(
    event.target.value.length
  );
}
document
  .querySelector(".input_password")
  .addEventListener("input", maskPassword);

let passwordTryCount = 0;
document
  .querySelector(".button_check_password")
  .addEventListener("click", () => {
    passwordTryCount++;

    function resetUserId() {
      document.querySelector(".id_box_real").innerText = "아이디";
      document.querySelector(".input_password").value = "";
      document.querySelector(".label_password_text").innerText = "\n";
      validMap.ID = false;
    }
    const hasNumber = (str) => /\d/.test(str);
    const hasUpperCase = (str) => /[A-Z]/.test(str);
    const hasLowerCase = (str) => /[a-z]/.test(str);

    const userPassword = document.querySelector(".input_password").value;
    if (!validMap.ID) {
      alert("아이디 중복확인을 먼저 해주세요");
      return resetUserId();
    } else if (!hasNumber(userPassword)) {
      alert("비밀번호에 숫자가 들어가야 합니다");
      return resetUserId();
    } else if (!hasUpperCase(userPassword)) {
      alert("비밀번호에 대문자가 들어가야 합니다");
      return resetUserId();
    } else if (!hasLowerCase(userPassword)) {
      alert("비밀번호에 소문자가 들어가야 합니다");
      return resetUserId();
    }

    alert(`${passwordTryCount}번만에 안전한 비밀번호를 설정했습니다`);
    validMap.PASSWORD = true;
  });

document.querySelector(".button_close_trap").addEventListener("click", () => {
  document.querySelector(".popup").classList.toggle("active");
});
