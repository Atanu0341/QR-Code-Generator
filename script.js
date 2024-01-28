let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");
let downloadBtn = document.getElementById("downloadBtn");

const generateQr = () => {
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    qrText.value
  )}`;
  imgBox.classList.add("show-img");
};

const isEmptyInput = () => {
  // Check if the input is empty or only contains whitespace
  if (qrText.value.trim() === "") {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  } else {
    generateQr();
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});
