import { config } from './config.js'

const BASE_URL = config.api_base_url

const IMAGE_BASE_URL = config.image_base_url

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${config.token}`,
	},
}

export async function getPopularMovies(page = 1) {
	let data = []
	try {
		const res = await fetch(
			`${BASE_URL}movie/popular?language=en-US&page=${page}`,
			options
		)
		const responseData = await res.json()
		data = responseData?.results
	} catch (err) {
		console.error(err)
	}
	return data
}
