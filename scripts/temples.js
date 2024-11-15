const lastModified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Months are zero-based
const currentYear = today.getFullYear();

// Format the date with slashes
const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastModified) lastModified.textContent = formattedDate;



// JavaScript to toggle the navigation menu
document.getElementById('menu').addEventListener('click', function () {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('open');
});

