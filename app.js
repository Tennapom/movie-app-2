"use strict";
// ========== MOVIE APP - SESSION 2 ==========
// Movie objects created from HTML data

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
};

// Movie 2: Dune
const duneMovie = {
  id: 4,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
};

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 16,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
};

// Tilføj resten af dine movie objekter her...
// (De objekter du oprettede i Trin 13)

console.log("✅ Movie objects loaded and ready for DOM manipulation!");

// Movie 4: Everything Everywhere All at Once
const everythingEverywhereMovie = {
  id: 4,
  title: "Everything Everywhere All at Once",
  year: 2022,
  genre: ["Action", "Adventure", "Comedy"],
  rating: 7.8,
  director: "Daniel Kwan, Daniel Scheinert",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
  description:
    "A Chinese-American woman is swept up in an insane adventure, where she alone can save the world by exploring other universes.",
};
// Movie 5: Fight Club
const fightClubMovie = {
  id: 5,
  title: "Fight Club",
  year: 1999,
  genre: ["Drama"],
  rating: 8.8,
  director: "David Fincher",
  image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  description:
    "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.",
};
// Movie 6: Forrest Gump
const forrestGumpMovie = {
  id: 6,
  title: "Forrest Gump",
  year: 1994,
  genre: ["Drama", "Romance"],
  rating: 8.8,
  director: "Robert Zemeckis",
  image:
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  description:
    "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man with a low IQ.",
};
// Movie 7: Goodfellas
const goodfellasMovie = {
  id: 7,
  title: "Goodfellas",
  year: 1990,
  genre: ["Biography", "Crime", "Drama"],
  rating: 8.7,
  director: "Martin Scorsese",
  image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
  actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
  description:
    "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
};
// Movie 8: Inception
const inceptionMovie = {
  id: 8,
  title: "Inception",
  year: 2010,
  genre: ["Action", "Adventure", "Sci-Fi"],
  rating: 8.8,
  director: "Christopher Nolan",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  description:
    "A thief who enters the dreams of others to steal secrets is given the inverse task of planting an idea into the mind of a CEO.",
};

// Find movie list container (den er nu tom efter Trin 15B!)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
}

// Test funktionen
displayMovie(barbieMovie);

// Ryd container først
movieListContainer.innerHTML = "";

// Tilføj movies med ÉN linje hver (så nemt!)
displayMovie(barbieMovie);
displayMovie(duneMovie);
displayMovie(duneTwoMovie);
displayMovie(everythingEverywhereMovie);
displayMovie(fightClubMovie);
displayMovie(forrestGumpMovie);
displayMovie(goodfellasMovie);
displayMovie(inceptionMovie);
console.log("3 movies tilføjet med kun 3 linjer kode!");
