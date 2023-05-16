let form = document.querySelector("#form");
let firstName = document.forms[0][0];
let lastName = document.forms[0][1];
let address = document.forms[0][2];
let email = document.forms[0][3];
let genders = document.getElementsByName("gender");
let plan = document.forms[0][6];
let terms = document.forms[0][7];
let msg = document.getElementsByTagName("small");
let submit = document.querySelector("#submit");
let formArea = document.querySelector(".form-area");
//submit action
submit.addEventListener("click", (e) => {
  e.preventDefault();
  for (let ele of form) {
    //gender
    for (let gender of genders) {
      if (gender.checked) {
        console.log(gender.value);
      }
    }
    if (ele.value) {
      let smallEle = ele.nextElementSibling;
      if (smallEle.tagName === "SMALL") {
        smallEle.className = "success";
        smallEle.textContent = "Success";
      }
    } else {
      let smallEle = ele.nextElementSibling;
      if (smallEle?.tagName === "SMALL") {
        smallEle.className = "error";
        smallEle.textContent = "Error";
      }
    }
  }
});
plan.addEventListener("change", (e) => {
  console.log(e.target.value);
});
terms.addEventListener("change", (e) => {
  if (e.target.checked) {
    formArea.style.backgroundColor = "lightYellow";
  } else {
    formArea.style.backgroundColor = "";
  }
});
