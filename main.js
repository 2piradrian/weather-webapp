// traer elementos del local storage
let cities = JSON.parse(localStorage.getItem("cities")) || [];

// funcion para guardar elementos en local storage
const saveLocalStorage = (citiesList) => {
	localStorage.setItem("cities", JSON.stringify(citiesList));
};

// funcion para redondear numeros
const roundNumbers = (number) => {
	return Math.round(number);
};

// funcion que renderiza las card
const renderCard = (dataObj) => {
	return `
    <div class="container" id="yourCity">
                    <i class="fa-solid fa-x" data-id="${dataObj.id}"></i>
					<h5 class="city">${dataObj.name}, ${dataObj.sys.country}</h5>
					<div class="mainInfo">
						<div class="description">
							<p class="timeDescription">${dataObj.weather.description}</p>
							<div class="temps">
								<p class="feelsLike">S.T. ${roundNumbers(dataObj.main.feels_Like)}º</p>
								<p class="temperature">${roundNumbers(dataObj.main.temp)}º</p>
							</div>
							<div class="minmax">
								<i class="fa-solid fa-arrow-down"></i>
								<p class="min">${roundNumbers(dataObj.main.temp_min)}º</p>
								<i class="fa-solid fa-arrow-up"></i>
								<p class="max">${roundNumbers(dataObj.main.temp_max)}º</p>
							</div>
						</div>
						<div class="imgContainer">
							<img src="/assets/${dataObj.weather[0].icon}.png" alt="Weather image" srcset="" />
						</div>
					</div>
					<div class="secondaryInfo">
						<div class="humidityInfo">
							<i class="fa-solid fa-droplet"></i>
							<p class="humidity">${dataObj.main.humidity}%</p>
						</div>
						<div class="pressureInfo">
							<i class="fa-solid fa-hurricane"></i>
							<p class="pressure">${dataObj.main.pressure}hP</p>
						</div>
						<div class="windInfo">
							<i class="fa-solid fa-wind"></i>
							<p id="wind">${dataObj.wind.speed}Km/h</p>
						</div>
					</div>
				</div>
    `;
};

//funcion que muestra en pantalla las cards
const showCards = (citiesList) => {
	$cardContainer.innerHTML = citiesList.map((city) => renderCard(city));
};
