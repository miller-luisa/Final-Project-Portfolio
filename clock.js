function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

function updateDate() {
    const dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.textContent = new Date().toDateString();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateClock();
    updateDate();
    setInterval(updateClock, 1000);

    // Weather container logic
    const weatherContainer = document.getElementById("weather-container");
    const weatherDisplay = document.getElementById("weather-display");

    function adjustWeatherContainerSize() {
        if (weatherContainer && weatherContainer.scrollHeight > 250) {
            weatherContainer.style.maxHeight = "400px";
            weatherContainer.style.overflowY = "auto";
        } else if (weatherContainer) {
            weatherContainer.style.overflowY = "hidden";
        }
    }

    if (weatherDisplay) {
        weatherDisplay.addEventListener("DOMSubtreeModified", adjustWeatherContainerSize);
    }

    adjustWeatherContainerSize(); // Run once at load
});
