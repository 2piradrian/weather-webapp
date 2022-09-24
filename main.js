// traer elementos del local storage
let cities = JSON.parse(localStorage.getItem("cities")) || [];

// funcion para guargar elementos en local storage
const saveLocalStorage = (citiesList) => {
	localStorage.setItem("cities", JSON.stringify(citiesList));
};
