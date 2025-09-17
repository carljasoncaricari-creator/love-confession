document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.querySelector(".proceed");
  const resetBtn = document.querySelector(".reset");
  const confessionBox = document.getElementById("confession");

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      confessionBox.style.display = "block";
      proceedBtn.style.display = "none"; // hide proceed after click
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
});
