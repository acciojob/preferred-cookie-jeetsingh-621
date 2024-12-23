 const savePreferences = () => {
        const fontSize = document.getElementById("fontsize").value;
        const fontColor = document.getElementById("fontcolor").value;

        // Save to localStorage
        localStorage.setItem("fontsize", fontSize);
        localStorage.setItem("fontcolor", fontColor);

        // Apply styles immediately
        document.body.style.fontSize = `${fontSize}px`;
        document.body.style.color = fontColor;

        alert("Preferences saved!");
      };

      // Function to load preferences from localStorage
      const loadPreferences = () => {
        const savedFontSize = localStorage.getItem("fontsize") || 16;
        const savedFontColor = localStorage.getItem("fontcolor") || "#000000";

        // Apply styles
        document.body.style.fontSize = `${savedFontSize}px`;
        document.body.style.color = savedFontColor;

        // Update input fields
        document.getElementById("fontsize").value = savedFontSize;
        document.getElementById("fontcolor").value = savedFontColor;
      };

      // Event listeners
      document.getElementById("saveBtn").addEventListener("click", savePreferences);

      // Load preferences on page load
      window.addEventListener("DOMContentLoaded", loadPreferences);