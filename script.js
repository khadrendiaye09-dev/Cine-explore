
const movies = [
  {
    id: 1,
    title: "Les Échos d'Orion",
    year: 2025,
    genre: "Science-fiction",
    symbol: "✦",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#182c55,#8b5a9f)",
    summary: "Au bord d'une galaxie oubliée, une jeune cartographe capte un signal mystérieux.",
    details: "Nora, cartographe spatiale, découvre un signal venu d'une planète absente des cartes. Elle part explorer ce mystère.",
    duration: "2 h 08",
    rating: "Tout public"
  },
  {
    id: 2,
    title: "Minuit à Belleville",
    year: 2024,
    genre: "Drame",
    symbol: "☾",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#36263d,#d17b63)",
    summary: "Une photographe revient dans son quartier natal et retrouve des souvenirs oubliés.",
    details: "Lina revient à Belleville pour vider l'ancien atelier de son père et découvre les secrets de son enfance.",
    duration: "1 h 46",
    rating: "Tout public"
  },
  {
    id: 3,
    title: "Le Dernier Raccourci",
    year: 2023,
    genre: "Aventure",
    symbol: "⌁",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#184a49,#c28c50)",
    summary: "Trois amis suivent une vieille carte à la recherche d'un mystérieux trésor.",
    details: "Sami, Jade et Élio partent explorer les montagnes grâce à une vieille carte. Leur aventure leur apprend à se faire confiance.",
    duration: "1 h 54",
    rating: "Tout public"
  },
  {
    id: 4,
    title: "Le Club des Inventeurs",
    year: 2025,
    genre: "Comédie",
    symbol: "⚙",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#7d4b25,#e6bd70)",
    summary: "Une invention farfelue transforme la semaine scientifique d'un collège.",
    details: "Quatre élèves inventent une machine censée ranger les objets. Mais leur invention provoque un joyeux chaos.",
    duration: "1 h 32",
    rating: "Tout public"
  },
  {
    id: 5,
    title: "La Forêt des Lucioles",
    year: 2022,
    genre: "Fantastique",
    symbol: "✧",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#163d37,#8da56d)",
    summary: "Une enfant découvre une forêt mystérieuse illuminée par d'étranges lumières.",
    details: "En cherchant son chien, Mila découvre une forêt magique où chaque lumière révèle un souvenir.",
    duration: "1 h 41",
    rating: "Tout public"
  },
  {
    id: 6,
    title: "Code : Horizon",
    year: 2024,
    genre: "Thriller",
    symbol: "⌘",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#202b42,#507d9b)",
    summary: "Une jeune programmeuse découvre une anomalie informatique inquiétante.",
    details: "Inès enquête sur un programme capable de prédire des événements impossibles et cherche à comprendre qui l'a créé.",
    duration: "1 h 58",
    rating: "Tout public"
  },
  {
    id: 7,
    title: "Un Été en Papier",
    year: 2021,
    genre: "Romance",
    symbol: "❀",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#713e5b,#e8a78b)",
    summary: "Deux passionnés de livres échangent des messages anonymes dans une librairie.",
    details: "Pendant les vacances, des messages cachés dans des romans rapprochent deux jeunes lecteurs.",
    duration: "1 h 38",
    rating: "Tout public"
  },
  {
    id: 8,
    title: "Planète Bleue",
    year: 2023,
    genre: "Documentaire",
    symbol: "◎",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=85",
    colors: "linear-gradient(145deg,#145276,#50b7b5)",
    summary: "Un voyage à la découverte des océans et de leur beauté.",
    details: "Ce documentaire explore les océans et les initiatives de communautés qui cherchent à protéger la vie marine.",
    duration: "1 h 20",
    rating: "Tout public"
  }
];

const grid = document.querySelector("#movieGrid");
const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");
const resultCount = document.querySelector("#resultCount");
const emptyMessage = document.querySelector("#emptyMessage");
const dialog = document.querySelector("#movieDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeDialog = document.querySelector("#closeDialog");

function populateGenres() {
  [...new Set(movies.map(movie => movie.genre))]
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach(genre => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      genreFilter.append(option);
    });
}

function createCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Voir les détails de ${movie.title}`);

  card.innerHTML = `
    <div class="poster" style="--poster-bg:${movie.colors}">
      <img
        class="poster-image"
        src="${movie.image}"
        alt="${movie.title}"
        loading="lazy"
      >
      <div class="poster-art">
        <span class="poster-symbol" aria-hidden="true">${movie.symbol}</span>
        <span class="poster-title">${movie.title}</span>
      </div>
    </div>
    <div class="movie-info">
      <div class="movie-meta">
        <span>${movie.year}</span>
        <span class="genre-pill">${movie.genre}</span>
      </div>
      <h3>${movie.title}</h3>
      <p>${movie.summary}</p>
      <span class="card-action">Découvrir le film ↗</span>
    </div>
  `;

  card.addEventListener("click", () => showDetails(movie));

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showDetails(movie);
    }
  });

  const posterImage = card.querySelector(".poster-image");
  posterImage.addEventListener("error", () => {
    posterImage.style.display = "none";
  });

  return card;
}

function renderMovies() {
  const query = searchInput.value.trim().toLocaleLowerCase("fr");
  const genre = genreFilter.value;

  const filtered = movies.filter(movie =>
    movie.title.toLocaleLowerCase("fr").includes(query) &&
    (genre === "all" || movie.genre === genre)
  );

  grid.replaceChildren(...filtered.map(createCard));
  resultCount.textContent =
    `${filtered.length} film${filtered.length > 1 ? "s" : ""}`;

  emptyMessage.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

function showDetails(movie) {
  dialogContent.innerHTML = `
    <div class="dialog-poster" style="background:${movie.colors}">
      <img
        src="${movie.image}"
        alt="${movie.title}"
        style="width:100%;height:100%;object-fit:cover;border-radius:12px"
      >
    </div>
    <div class="dialog-content">
      <p class="eyebrow">FICHE DU FILM · DÉMO</p>
      <h2 id="dialogTitle">${movie.title}</h2>
      <p class="dialog-details">
        ${movie.year} · ${movie.genre} · ${movie.duration}
      </p>
      <p>${movie.details}</p>
      <p><strong>Public :</strong> ${movie.rating}</p>
    </div>
  `;

  if (!dialog.open) dialog.showModal();
}

searchInput.addEventListener("input", renderMovies);
genreFilter.addEventListener("change", renderMovies);
closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

populateGenres();
renderMovies();
