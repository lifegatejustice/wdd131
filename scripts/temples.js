const lastModified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Months are zero-based
const currentYear = today.getFullYear();

// Format the date with slashes
const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastModified) lastModified.textContent = formattedDate;



// JavaScript to toggle the navigation menu
const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');
const header = document.querySelector('header');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    header.classList.toggle('menu-open');
});
