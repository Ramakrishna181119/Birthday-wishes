// script.js

function updateTimeSince() {
    // Define the start date: September 5th, 2007
    const startDate = new Date('2007-09-05T00:00:00');

    // Get the current date and time
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = now - startDate;

    // Calculate the time differences in days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements with the new values
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the time every second
setInterval(updateTimeSince, 1000);

// Initial call to display time right away
updateTimeSince();

