// CinéExplore — données de démonstration fictives, sans API ni clé secrète.
const movies = [
  { id: 1, title: "Les Échos d'Orion", year: 2025, genre: "Science-fiction", symbol: "✦", colors: "linear-gradient(145deg,#182c55,#8b5a9f)", summary: "Au bord d'une galaxie oubliée, une jeune cartographe capte un signal qui semble lui répondre.", details: "Nora, cartographe spatiale, découvre un signal venu d'une planète absente des cartes. Avec une équipe improbable, elle part explorer ce mystère et questionne tout ce qu'elle croyait savoir sur l'univers.", duration: "2 h 08", rating: "Tout public" },
  { id: 2, title: "Minuit à Belleville", year: 2024, genre: "Drame", symbol: "☾", colors: "linear-gradient(145deg,#36263d,#d17b63)", summary: "Une photographe revient dans son quartier natal et retrouve des souvenirs qu'elle croyait perdus.", details: "En revenant à Belleville pour vider l'ancien atelier de son père, Lina rencontre des voisins qui lui racontent chacun une version différente de son enfance.", duration: "1 h 46", rating: "Tout public" },
  { id: 3, title: "Le Dernier Raccourci", year: 2023, genre: "Aventure", symbol: "⌁", colors: "linear-gradient(145deg,#184a49,#c28c50)", summary: "Trois amis suivent une vieille carte et découvrent que le voyage compte plus que le trésor.", details: "Pendant un été, Sami, Jade et Élio suivent les indices d'une carte retrouvée dans une cabane. Leur aventure leur apprend à faire confiance à leurs différences.", duration: "1 h 54", rating: "Tout public" },
  { id: 4, title: "Le Club des Inventeurs", year: 2025, genre: "Comédie", symbol: "⚙", colors: "linear-gradient(145deg,#7d4b25,#e6bd70)", summary: "Dans un collège, une invention farfelue transforme la semaine scientifique en chaos joyeux.", details: "Quatre élèves montent un club d'invention pour sauver leur atelier. Leur machine censée ranger les objets fait exactement l'inverse, et toute l'école se mobilise.", duration: "1 h 32", rating: "Tout public" },
  { id: 5, title: "La Forêt des Lucioles", year: 2022, genre: "Fantastique", symbol: "✧", colors: "linear-gradient(145deg,#163d37,#8da56d)", summary: "Une enfant découvre une forêt lumineuse où chaque luciole garde le souvenir d'un vœu.", details: "En cherchant son chien disparu, Mila traverse une forêt où les lumières révèlent des souvenirs. Elle comprend que certains vœux ont besoin d'être partagés pour devenir réalité.", duration: "1 h 41", rating: "Tout public" },
  { id: 6, title: "Code : Horizon", year: 2024, genre: "Thriller", symbol: "⌘", colors: "linear-gradient(145deg,#202b42,#507d9b)", summary: "Une jeune programmeuse repère une anomalie qui pourrait bouleverser sa ville.", details: "Lorsqu'un système de transport prédit des événements impossibles, Inès suit la piste d'un programme oublié et doit décider à qui faire confiance.", duration: "1 h 58", rating: "Tout public" },
  { id: 7, title: "Un Été en Papier", year: 2021, genre: "Romance", symbol: "❀", colors: "linear-gradient(145deg,#713e5b,#e8a78b)", summary: "Deux passionnés de livres échangent des notes anonymes dans une petite librairie.", details: "Pendant les vacances, des messages glissés dans des romans rapprochent deux jeunes lecteurs. Ils tentent de découvrir l'identité de l'autre sans perdre la magie de l'anonymat.", duration: "1 h 38", rating: "Tout public" },
  { id: 8, title: "Planète Bleue", year: 2023, genre: "Documentaire", symbol: "◎", colors: "linear-gradient(145deg,#145276,#50b7b5)", summary: "Un voyage contemplatif à la rencontre des paysages et des initiatives qui protègent les océans.", details: "Ce documentaire de démonstration suit plusieurs communautés qui restaurent les récifs, nettoient les côtes et inventent des façons plus durables de vivre avec la mer.", duration: "1 h 20", rating: "Tout public" }
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
  [...new Set(movies.map(movie => movie.genre))].sort((a, b) => a.localeCompare(b, "fr"))
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
      <div class="poster-art"><span class="poster-symbol" aria-hidden="true">${movie.symbol}</span><span class="poster-title">${movie.title}</span></div>
    </div>
    <div class="movie-info">
      <div class="movie-meta"><span>${movie.year}</span><span class="genre-pill">${movie.genre}</span></div>
      <h3>${movie.title}</h3>
      <p>${movie.summary}</p>
      <span class="card-action">Découvrir le film ↗</span>
    </div>`;
  card.addEventListener("click", () => showDetails(movie));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showDetails(movie);
    }
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
  resultCount.textContent = `${filtered.length} film${filtered.length > 1 ? "s" : ""}`;
  emptyMessage.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

function showDetails(movie) {
  dialogContent.innerHTML = `
    <div class="dialog-poster" style="background:${movie.colors}" aria-hidden="true"><span>${movie.symbol}</span></div>
    <div class="dialog-content">
      <p class="eyebrow">FICHE DU FILM · DÉMO</p>
      <h2 id="dialogTitle">${movie.title}</h2>
      <p class="dialog-details">${movie.year} · ${movie.genre} · ${movie.duration}</p>
      <p>${movie.details}</p>
      <p><strong>Public :</strong> ${movie.rating}</p>
    </div>`;
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
