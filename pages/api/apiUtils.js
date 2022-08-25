export const genericFetcher = (...args) => fetch(...args).then((res) => res.json());
export const imgFetcher = (...args) => fetch(...args).then((res) => res.blob());

const API_KEY = "4041dcbba82ce21c78d6449dcad06655";
const LANGUAGE_CODE = "fr-FR";
const language = "&language=" + LANGUAGE_CODE;
const apiKey = "?api_key=" + API_KEY;

const mandatoryParams = apiKey + language;

const imageURL = "https://image.tmdb.org/t/p/";
const originalSize = "original";
const lowSize = "w92";

export const getImageURL = (path) => imageURL + originalSize + path;
export const getLowImageURL = (path) => imageURL + lowSize + path;

const baseApiURL = "https://api.themoviedb.org/3/";
const movies = baseApiURL + "movies/";
const movie = baseApiURL + "movie/";
const trending = baseApiURL + "trending/";
const search = baseApiURL + "search/";
const searchMovies = search + "movie";

export const ALL_MEDIA = "all/";
export const MOVIE_MEDIA = "movie/";
export const TV_MEDIA = "tv/";
export const PERSON_MEDIA = "person/";

export const DAY = "day";
export const WEEK = "week";

export const getLatestMovies = () => movies + "latest";
export const getUpcoming = () => movie + "upcoming/" + mandatoryParams;
export const getTopRated = () => movie + "top_rated/" + mandatoryParams;
export const getTrendingURL = (media, period) => trending + media + period + mandatoryParams;

const append = "&append_to_response=";
const appendMovie = "credits,videos,reviews";

export const getMovieURL = (movieId) => movie + movieId + mandatoryParams + append + appendMovie;

const query = "&query=";
const page = "&page=";
export const getSearchMovieURL = (queryString, pageNumber = 1) =>
	searchMovies + mandatoryParams + query + queryString + page + pageNumber;
