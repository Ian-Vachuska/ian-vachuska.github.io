const biggerBtn = document.querySelector("#bigger");
const fancyBtn = document.querySelector("#fancy");
const boringBtn = document.querySelector("#boring");
const mooBtn = document.querySelector("#moo");
const textarea = document.querySelector("#myText");

function bigger() {
  //let currentSize = parseInt(window.getComputedStyle(textarea).fontSize);
  textarea.style.fontSize = '24px';
}
function moo() {
  textarea.value = textarea.value.toUpperCase();
  let parts = textarea.value .split(".");
  str = parts.join(" -Moo");
  textarea.value = str;

}
function fancyShmancy() {
  //const textarea = document.querySelector("#myText");
  textarea.style.fontWeight = 'bold';
  textarea.style.color = "blue";
  textarea.style.textDecoration = "underline";
}
function boringBetty() {
  //textarea.style.fontSize = "";
  textarea.style.fontWeight = "";
  textarea.style.color = "";
  textarea.style.textDecoration = "";
}

biggerBtn.addEventListener("click", bigger);
fancyBtn.addEventListener("click", fancyShmancy);
boringBtn.addEventListener("click", boringBetty);
mooBtn.addEventListener("click", moo);