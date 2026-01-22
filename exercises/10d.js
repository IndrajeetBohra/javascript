function toggle(buttonClass) {
  if (
    document.querySelector(`.${buttonClass}`).classList.contains("is-toggled")
  ) {
    document.querySelector(`.${buttonClass}`).classList.remove("is-toggled");
  } else {
    document.querySelector(`.${buttonClass}`).classList.add("is-toggled");
  }
}
