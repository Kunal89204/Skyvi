Skyvi Weather App Documentation
Overview
Skyvi is a simple and stylish weather application that allows users to check the current weather conditions for a specific city. The application provides real-time information on temperature, humidity, wind speed, and more.

Features
Search for Weather: Users can enter the name of a city in the search box to get the current weather information for that location.

Default Location: Upon loading the page, the application automatically fetches weather data for a default location (in this case, India) and displays it on the screen.

Responsive Design: The application is designed to be responsive, providing a seamless experience on various devices, including desktops, tablets, and mobile phones.

Error Handling: The application handles errors gracefully, displaying user-friendly error messages when there is an issue with fetching weather data.

Empty Input Handling: Users receive a notification when attempting to search with an empty input field.

Stylish UI: The user interface is aesthetically pleasing, featuring a modern design with clear and readable elements.

Usage
Search for Weather
Enter City Name: In the search box, type the name of the city for which you want to check the weather.

Click Search Icon: Click on the magnifying glass icon (search button) or press Enter to initiate the search.

View Weather Information: The application will display the current temperature, humidity, wind speed, and an image representing the weather condition for the specified city.

Default Location
Upon loading the page, the application automatically fetches and displays weather data for the default location (India). Users can customize the default location by modifying the defaultCity variable in the JavaScript code.

Design
Fonts
The application uses the following fonts:

Poppins: Used for general text and headings.
Roboto Mono: Used for specific text elements.
Colors
The color scheme is a combination of green and blue, providing a vibrant and refreshing appearance. The background uses a gradient that adds a touch of elegance.

Icons
Icons from the Font Awesome library are used for the magnifying glass, humidity, and wind speed elements.

File Structure
index.html: HTML file containing the structure of the web page.
style.css: CSS file containing styles for the application.
script.js: JavaScript file containing logic for fetching weather data and updating the UI.
Customization
Default City: To change the default city, modify the defaultCity variable in the JavaScript code.
Dependencies
Font Awesome: The application uses the Font Awesome library to include icons.
Future Improvements
Additional Weather Conditions: Consider adding more conditions and corresponding images to cover a broader range of weather scenarios.

User Geolocation: Implement functionality to get the user's geolocation and automatically display weather information for their location.

Conclusion
Skyvi offers a visually appealing and user-friendly way to check the weather. It provides essential weather information with a focus on simplicity and elegance. Feel free to explore further customization and enhancements based on your preferences and user feedback.