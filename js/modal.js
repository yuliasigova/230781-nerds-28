let buttonMail = document.querySelector(".button-mail");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup-close");
let userName = popup.querySelector(".name-user");
let form = popup.querySelector(".popup-form");
let userEmail = popup.querySelector(".user-email");
let userMessage = popup.querySelector(".message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonMail.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
        userName.value = storage;
        userEmail.focus();
      } else {
        userName.focus();
        }
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("name", userName.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("popup-show")) {
        evt.preventDefault();
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
});