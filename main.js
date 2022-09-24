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

const renderCard = () => {};
