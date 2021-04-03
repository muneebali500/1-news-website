const paraEl = document.querySelectorAll("p");

paraEl.forEach((para) => (para.inerText = truncateText(para, 100)));

function truncateText(selector, maxLength) {
  if (selector.innerText.length > maxLength) {
    selector.innerText = selector.innerText.substr(0, maxLength) + "...";
  }

  return selector;
}
