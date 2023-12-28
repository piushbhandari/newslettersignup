(function () {
  const emailInput = document.querySelector("#newsletter-email");
  const submitBtn = document.querySelector("#newsletter-submit");
  const errMsgElement = document.querySelector("#error-msg");
  const newsletterBox = document.querySelector("#newsletter-box");
  const subBox = document.querySelector("#subscribe-box");

  let errMsg = "";

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isEmailValid = validateForm();

    if (!isEmailValid) {
      errMsgElement.textContent = errMsg;
      errMsgElement.classList.add("show");
      emailInput.classList.add("error");
    } else if (isEmailValid) {
      errMsgElement.classList.remove("show");
      emailInput.classList.remove("error");
      emailInput.value = "";
      newsletterBox.classList.add("hide");
      subBox.classList.remove("hide");

      triggerDismissBtn();
    }
  });

  function triggerDismissBtn() {
    const dismissBtn = document.querySelector("#go-away");

    dismissBtn.addEventListener("click", (e) => {
      newsletterBox.classList.remove("hide");
      newsletterBox.classList.add("show");
      subBox.classList.add("hide");
    });
  }

  function validateForm() {
    const emailValue = emailInput.value;
    let formattedVal = emailValue.trim();
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = false;

    if (!formattedVal) {
      errMsg = "Field cannot be empty";
    } else if (!regExp.test(formattedVal)) {
      errMsg = "Valid email required";
    } else {
      isValid = true;
    }
    return isValid;
  }
})();
