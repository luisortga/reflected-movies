document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main");

  // Obtener las películas
  fetch("https://node-rest-api-dual-db.onrender.com/movies")
    .then((res) => res.json())
    .then((movies) => {
      // Generar el HTML
      const html = movies
        .map((movie) => {
          return `
          <article data-id="${movie.id}">
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}" />
            <p>${movie.year}</p>
            <button class="delete">Eliminar</button>
          </article>
        `;
        })
        .join("");

      mainContainer.innerHTML = html;

      // Animación de Anime.js para la entrada de las tarjetas
      anime({
        targets: "article",
        translateY: [50, 0], // Aparecen desde abajo
        opacity: [0, 1], // Transición de transparente a visible
        delay: anime.stagger(150), // Aparecen una por una con retraso
        easing: "easeOutExpo",
        duration: 1000,
      });
    })
    .catch((error) => console.error("Error al cargar películas:", error));

  // Delegación de eventos para el botón de eliminar
  document.addEventListener("click", (e) => {
    if (e.target.matches("button.delete")) {
      const article = e.target.closest("article");
      const id = article.dataset.id;

      // 1. Ejecutar animación de salida con Anime.js
      anime({
        targets: article,
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 400,
        easing: "easeInExpo",
        complete: () => {
          // 2. Hacer la petición DELETE cuando termina la animación
          fetch(`http://localhost:1234/movies/${id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (res.ok) {
                article.remove();
              } else {
                // Si falla, removemos el artículo de todos modos o manejamos el error
                article.remove();
              }
            })
            .catch(() => {
              article.remove();
            });
        },
      });
    }
  });
});
