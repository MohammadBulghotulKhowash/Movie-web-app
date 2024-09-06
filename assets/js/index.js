document.addEventListener("DOMContentLoaded", (e) => {
  const movie = document.querySelector(".movie-film");
  const series = document.querySelector(".series-film");

  fetch("http://www.omdbapi.com/?i=tt0274294&apikey=99385789&s=avengers")
    .then((respone) => respone.json())
    .then((respone) => {
      const result = respone.Search;
      let films = "";
      result.forEach((r) => {
        films += `<div class="card">
                        <img src="${r.Poster}" class="card-img-top" alt="poster">
                        <div class="card-body">
                            <h5 class="card-title">${r.Title}</h5>
                            <p class="card-text">${r.Year}</p>
                        </div>
                    </div>`;
      });
      movie.innerHTML = films;
    })
    .catch((err) => console.error(err));

  fetch(
    "http://www.omdbapi.com/?i=tt0274294&apikey=99385789&s=star wars"
  )
    .then((respone) => respone.json())
    .then((respone) => {
      const result = respone.Search;
      let films = "";
      result.forEach((r) => {
        films += `<div class="card">
                        <img src="${r.Poster}" class="card-img-top" alt="poster">
                        <div class="card-body">
                            <h5 class="card-title">${r.Title}</h5>
                            <p class="card-text">${r.Year}</p>
                        </div>
                    </div>`;
      });
      series.innerHTML = films;
    })
    .catch((err) => console.error(err));
});
