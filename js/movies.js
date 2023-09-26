import { config } from './config.js'

import { getPopularMovies } from './api.js'

const moviesDiv = document.getElementById('movies')

export async function renderMovies() {
	const movies = await getPopularMovies()
	console.log(movies)
	moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join('')
}

function renderSingleMovie(movie) {
	const { poster_path, title, release_date, vote_average } = movie
	return `
      <div class="movie__card">
          <img src="${
						config.image_base_url + poster_path
					}" class="movie__card-img" >
          <h2>${title}</h2>
          <h4>${release_date}</h4>
          <p>Rating: ${vote_average}</p>
      </div>
      `
}
