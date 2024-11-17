# PRODIGY_WD_05

### Weather Web Application

A simple and interactive weather web application that fetches real-time weather data using the OpenWeatherMap API. Users can view current weather conditions, temperature, humidity, and wind speed based on their location or a user-inputted city name.

---

## Features
- Fetch current weather data for a city.
- Automatically fetch weather data based on the user's geolocation.
- Display weather information such as temperature, humidity, wind speed, and weather conditions.
- Error handling for:
  - Invalid city names.
  - Inputting a country name instead of a city name.
  - Geolocation not enabled or unsupported.
- Dynamic and user-friendly interface.

---

## Technologies Used
- **HTML**: For structuring the application.
- **CSS**: For styling the web page.
- **JavaScript**: For handling API calls and DOM manipulation.
- **OpenWeatherMap API**: For fetching real-time weather data.

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/PRODIGY_WD_05.git
   cd PRODIGY_WD_05
   ```
2. Open the `script.js` file and replace `your_openweathermap_api_key` with your OpenWeatherMap API key:
   ```javascript
   const apiKey = 'your_openweathermap_api_key';
   ```
3. Open `index.html` in a browser.

---

## How to Use
1. **Search by City**:
   - Enter a city name in the search bar and click the "Search" button.
   - The app will display the current weather for the city.
   - If a country name is entered, the app will show an error asking for a city name.

2. **Use Geolocation**:
   - Allow location access when prompted by the browser.
   - The app will automatically fetch and display the weather for your current location.

---

## Error Handling
- **Invalid City**: Displays "City not found. Please try again."
- **Country Name Entered**: Displays "You entered a country name. Please enter a city name."
- **Geolocation Denied or Unsupported**: Displays "Geolocation is not enabled. Please search for a city."

---

## Demo
Include screenshots or a live demo link here if hosted (e.g., GitHub Pages).

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.


---

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/) for providing weather data.
- Special thanks to **Ajitesh Vishwakarma** for the project development.

