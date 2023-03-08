const codeDisplay = document.getElementById("code-display");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateCode);
document.body.addEventListener("click", toggleDarkMode);

function generateCode() {
  const codeLength = 8;
  const codeCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    code += codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
  }
  codeDisplay.innerText = code;
  
  const hexColor = generateHexColor();
  document.body.style.backgroundColor = hexColor;
}

function generateHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
