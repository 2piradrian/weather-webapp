const $cardContainer = document.querySelector(".cardContainer");
const $submitCity = document.getElementById("submitCity");
const $addCity = document.getElementById("addCity");
const $addCityForm = document.getElementById("addCityForm");

const API_KEY = "fe01eb2655029ceeaf5afb0a96514729";

/* Requests */
const requestCity = async (city) => {
	// pre request ->
	const url = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&q=${city}&appid=${API_KEY}`;
	// request ->
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
const getLocation = () => {
	navigator.geolocation.getCurrentPosition(requestLocation);
};
const requestLocation = async (position) => {
	// pre request ->
	const { latitude, longitude } = position.coords;
	const url = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
	// request ->
	const response = await fetch(url);
	const data = await response.json();
	addLocalCard(data);
	return showCards(cities);
};
