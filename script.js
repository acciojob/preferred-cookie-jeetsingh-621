// Save preferences in cookies
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  document.cookie = `fontsize=${fontSize}; path=/`;
  document.cookie = `fontcolor=${fontColor}; path=/`;

  // Apply styles immediately
  document.body.style.fontSize = `${fontSize}px`;
  document.body.style.color = fontColor;

  alert("Preferences saved!");
});

// Load preferences from cookies
window.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split("; ");
  const cookieMap = cookies.reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  const fontSize = cookieMap.fontsize || "16"; // Default font size
  const fontColor = cookieMap.fontcolor || "#000000"; // Default font color

  // Apply saved preferences
  document.body.style.fontSize = `${fontSize}px`;
  document.body.style.color = fontColor;

  // Update input fields
  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
});
