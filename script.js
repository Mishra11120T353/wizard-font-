const fontSuggestions = {
  // 🟢 Mobile Apps
  "mobile app": "Use `Roboto 16px` for body and `Roboto Bold 20px` for headers.",
  "finance app": "Use `Nunito 14px` for general UI and `Nunito Bold 18px` for totals and balances.",
  "healthcare app": "Use `Assistant 16px` for patient info and `Assistant Bold 18px` for section titles.",
  "chat app": "Use `Manrope 15px` for messages and `Manrope Bold 18px` for sender names.",
  "music player app": "Use `Fira Sans 14px` for song lists and `Fira Sans Bold 18px` for now-playing track.",
  "weather app": "Use `Quicksand 16px` for forecast and `Quicksand Bold 22px` for temperature.",

  // 🖥️ Dashboards & Admin Panels
  "dashboard": "Use `Inter 14px` for tables and `Inter SemiBold 18px` for titles.",
  "admin panel": "Use `Source Sans Pro 14px` for readability and `Source Sans Pro Semibold 16px` for emphasis.",
  "analytics dashboard": "Use `IBM Plex Sans 14px` for data rows and `IBM Plex Sans Bold 18px` for KPIs.",

  // 🌐 Websites
  "landing page": "Use `Poppins 18px` for headings and `Open Sans 16px` for body.",
  "portfolio website": "Use `Playfair Display 24px` for name and `Montserrat 16px` for body.",
  "blog": "Use `Merriweather 18px` for content and `Georgia Bold 22px` for titles.",
  "news website": "Use `Times New Roman 18px` for articles and `Verdana Bold 20px` for headlines.",
  "real estate": "Use `Ubuntu 16px` for property info and `Ubuntu Bold 20px` for titles.",
  "travel website": "Use `Raleway 20px` for headers and `Open Sans 16px` for descriptions.",
  "ecommerce website": "Use `Lato 16px` for product descriptions and `Lato Bold 20px` for prices.",
  "login page": "Use `Segoe UI 16px` for inputs and `Segoe UI Bold 20px` for the title.",

  // 📚 Platforms & Learning
  "education platform": "Use `Work Sans 16px` for paragraphs and `Work Sans SemiBold 20px` for modules.",
  "course website": "Use `Karla 16px` for lesson text and `Karla Bold 22px` for module titles.",

  // 🎮 Entertainment
  "game ui": "Use `Orbitron 16px` for buttons and `Press Start 2P 14px` for scores.",
  "video streaming": "Use `DM Sans 16px` for metadata and `DM Sans Medium 20px` for titles.",

  // 🔁 Standard / General
  "standard": "Use `Arial 16px` for body and `Arial Bold 20px` for headings.",
  "default": "Use `Helvetica 16px` for body and `Helvetica Bold 20px` for headers."
};

function generatePrompt() {
  const input = document.getElementById("uiType").value.trim().toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (fontSuggestions[input]) {
    resultText.innerHTML = `<span class='label'>Suggested Font:</span><br><span class='value'>${fontSuggestions[input]}</span>`;
    resultBox.style.border = "2px solid #4CAF50";
  } else {
    resultText.innerHTML = "<span class='label'>No match found for this UI type.</span>";
    resultBox.style.border = "2px solid #f44336";
    resultBox.style.background = "#2b1f1f";
    resultBox.style.color = "#ffbfbf";
  }

  resultBox.classList.remove("hidden");
}
