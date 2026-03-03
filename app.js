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
      content.innerHTML = `
        <h2>🔍 ГРАМОТЕЙКА</h2>
        <p>
          Здесь разбираем сложные случаи: «одеть» или «надеть»? 
          Кофе — он или оно? 
          Спорим, находим истину и запоминаем раз и навсегда.
        </p>
      `;
      break;

    case "games":
      content.innerHTML = `
        <h2>🎮 СЛОВОЗОР</h2>
        <p>
          Игры для ума и души: викторины, квизы, словесные батлы и челленджи. 
          Кто тут главный эрудит?
        </p>
      `;
      break;

    case "dictionary":
      content.innerHTML = `
        <h2>🗣 БОЛЬШОЙ СЛОВАРЬ</h2>
        <p>
          Обсуждаем книги, фильмы, современный сленг и всё, что делает наш язык живым. 
          Делимся впечатлениями и новыми словечками!
        </p>
      `;
      break;

    default:
      content.innerHTML = `<p>Выберите раздел</p>`;
  }
}
