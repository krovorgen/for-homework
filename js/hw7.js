const shadowButton = () => {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  button.hidden = true;
  input.addEventListener("input", function shadow() {
    button.hidden = !this.value.length;
  });
};
shadowButton();
document.querySelector(".button").onclick = () => {
  shadowButton();
  const input = document.querySelector(".input");
  const paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  const div = document.querySelector(".divshadow");
  div.append(paragraph);
  const ps = div.querySelectorAll("p");
  input.value = "";
  if (ps.length > 5) {
    ps[0].remove();
  }
  shadowButton();
};
