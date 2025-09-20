const startBtn = document.getElementById("startBtn");
const secondPage = document.getElementById("secondPage");
const backBtn = document.getElementById("backBtn");
const bgUpload = document.getElementById("bgUpload");

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  secondPage.classList.add("active");
});

backBtn.addEventListener("click", () => {
  secondPage.classList.remove("active");
});

bgUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      secondPage.style.backgroundImage = `url('${ev.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
});
