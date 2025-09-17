document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.querySelector("button.proceed, .proceed, #proceed");
  const resetBtn = document.querySelector("button.reset, .reset, #reset");

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      alert("Hi Boss, kumusta ka? 😊 I know you're not doing good sometimes but laban lang ara grind paras future. I just want to say nga I'm still stalking your reposts and one really stood out to me — the phrase: 'you know a boy's real intentions when you reject them.' Can I ask, did you reject me ba? If yes then I guess this is my first time getting rejected HAHAHAHAHA. I saw all your reports about your past. Pero wakoy paki 💖");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
});
