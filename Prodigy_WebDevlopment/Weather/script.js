document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '548e1b24fbcceb7e5d3b02a09ca97923'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const form = document.getElementById('cityForm');
    const weatherInfo = document.getElementById('weatherInfo');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const city = formData.get('city');

        if (city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const cityName = data.name;
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;

                    const weatherHtml = `
                        <p>City: ${cityName}</p>
                        <p>Temperature: ${temperature} °C</p>
                        <p>Description: ${description}</p>
                    `;
                    weatherInfo.innerHTML = weatherHtml;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
                });
        }
    });
});
