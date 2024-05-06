/* const discord = document.getElementById("discord");
const discordNick = "c0m0d1n";

discord.addEventListener("click", () => {
  const discordContent = discord.innerHTML;
  navigator.clipboard
    .writeText(discordNick)
    .then(() => {
      discord.innerText = "Copiado!";
      setTimeout(() => {
        discord.innerHTML = discordContent;
      }, 1500);
    })
    .catch((e) => alert(e.message));
}); */

const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@andrebalenLinktree/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("@andrebalenLinktree/Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@andrebalenLinktree/Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@andrebalenLinktree/Theme", "light");
  }
});
