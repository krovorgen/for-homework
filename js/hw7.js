export function addForm(el) {
  const button = document.createElement("button");
  const input = document.createElement("input");

  button.className = "button";
  input.className = "input";
  button.innerText = "Click";
  /* button.setAttribute('hidden', true); */
  button.hidden = true;

  input.addEventListener("input", function shadow() {
    button.hidden = !this.value.length;
  });

  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = input.value;
    el.append(p);
    input.value = "";
    button.hidden = true;
    /* button.setAttribute('hidden', true) */
    if (el.querySelectorAll("p").length > 5) {
      el.querySelectorAll("p")[0].remove();
    }
  });
  el.appendChild(input);
  el.appendChild(button);
}
/* export const createHTML = () => {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  button.hidden = true;
  input.addEventListener("input", function shadow() {
    button.hidden = false;
  });
  button.onclick = () => {
    button.hidden = true;
    const paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    const div = document.querySelector(".divshadow");
    div.append(paragraph);
    const ps = div.querySelectorAll("p");
    input.value = "";
    if (ps.length > 5) {
      ps[0].remove();
    }
  };
};
createHTML(); */
