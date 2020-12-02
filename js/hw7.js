export function textParagraph() {
  document.getElementById("buttonMe").onclick = () => {
    const input = window.prompt("Enter a text: ");
    const el = document.getElementById("buttonMe");
    if (!input) {
      el.hidden = true;
    }
    const messageEl = document.createElement("p");
    messageEl.innerText = input;
    const messageBox = document.querySelector("#addElements");
    messageBox.append(messageEl);
    if (messageBox.childNodes.length > 6) {
      messageBox.childNodes[1].remove();
    }
  };
}
