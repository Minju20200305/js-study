const form = document.querySelector(".js-form"),
  input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// 유저가 input에 입력한 이름을 가져와서, print하고 save하는 함수.
// function 함수이름(){} : 이런 함수가 있다고 준비해둔 것. action은 안함.
// action을 하려면 함수이름(); <-이런 걸 어딘가에서 호출해야함.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;

  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  // addEventListener
  // 유저의 동작-함수가 매핑돼.
  // 그냥 실행하는게 아니라. 유저가 submit하면(form에서 엔터를 치면)
  //      handleSumit()이라는 함수를 실행해라.
  form.addEventListener("submit", handleSubmit);
}

// 화면에 Hello 민주 찍는 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);

  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;

  // 여기서 js-form 클래스를 가진 form타입에 greetings를 추가하면
  // form 보인다(display:none이니까)
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

// 이 파일은 변수와 함수만 정의하다가 끝.
init();
