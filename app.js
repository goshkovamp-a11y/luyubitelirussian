document.addEventListener("DOMContentLoaded", () => {
  if (window.WebApp) {
    WebApp.ready();
    console.log("MAX WebApp initialized");
    console.log(WebApp.initDataUnsafe);
  }
});

function openSection(section) {
  const content = document.getElementById("content");

  switch (section) {
    case "mistakes":
  content.innerHTML = `
    <h2>⚠️ НА ГРАБЛЯХ</h2>
    <p>
      Учимся на чужих ошибках, чтобы не совершать свои. 
      Смеёмся над забавными ляпами и запоминаем правильные варианты.
    </p>
  `;
  break;

    case "grammar":
      content.innerHTML = "<h2>🔍 ГРАМОТЕЙКА</h2><p>Раздел в разработке</p>";
      break;

    case "games":
      content.innerHTML = "<h2>🎮 СЛОВОЗОР</h2><p>Раздел в разработке</p>";
      break;

    case "dictionary":
      content.innerHTML = "<h2>🗣 БОЛЬШОЙ СЛОВАРЬ</h2><p>Раздел в разработке</p>";
      break;
  }
}

