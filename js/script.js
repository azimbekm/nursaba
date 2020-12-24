const API_KEY = 'bc023b5c75dea233932b7e5cc5757634'
const weather = document.getElementById('weather'),
			form = document.getElementById('form'),
			input = document.getElementById('value')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	let city = input.value
	if (city != '' && city != ' ') {
	weather.innerHTML = '<div class="loading"></div>'

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
		.then((res) => res.json())
		.then((local) => {
			if (local) {
				weather.innerHTML = `
					<span><b>City:</b> ${local.name}</span> <br>
					<span><b>Temperature:</b> ${local.main.temp} C&#176;</span> <br>
					<span><b>Feels like:</b> ${local.main.feels_like} C&#176;</span> <br>
					<span><b>Humidity:</b> ${local.main.humidity}%</span> <br>
					<span><b>Pressure:</b> ${local.main.pressure}</span> <br>
					<span><b>Weather:</b> ${local.weather[0].main}</span> <br>
				`
			}
		})
	}
})

window.onload = function () {
	showLocalCity()
}

function showLocalCity() {
	weather.innerHTML = '<div class="loading"></div>'
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=${API_KEY}&units=metric`)
		.then((res) => res.json())
		.then((local) => {
				weather.innerHTML = `
						<span><b>City:</b> ${local.name}</span> <br>
						<span><b>Temperature:</b> ${local.main.temp} C&#176;</span> <br>
						<span><b>Feels like:</b> ${local.main.feels_like} C&#176;</span> <br>
						<span><b>Humidity:</b> ${local.main.humidity}%</span> <br>
						<span><b>Pressure:</b> ${local.main.pressure}</span> <br>
						<span><b>Weather:</b> ${local.weather[0].main}</span> <br>
				`
		})
}