const lastModified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Months are zero-based
const currentYear = today.getFullYear();

// Format the date with slashes
const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastModified) lastModified.textContent = formattedDate;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

  