const image = document.getElementById('myImage');
const images = [
    "images/tvseries.webp",
    "images/movies.webp",
    "images/sport.webp",
    "images/movies2.webp",
    "images/tvseries2.webp",
    "images/sport2.webp",
    "images/movies3.webp",


];
let currentIndex = 0;

function changeImage() {
    // Add the swipe-left class for animation
    image.classList.add('swipe-left');
    
    // Wait for the animation to complete before changing the image
    setTimeout(() => {
        // Update the image source
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        
        // Reset the animation class
        image.classList.remove('swipe-left');
    }, 500); // Match the CSS transition duration
}

// Automatically change the image every 3 seconds
setInterval(changeImage, 3000);


// Data arrays
const movies = [
  { 
    title: "Inception", 
    year: 2010, 
    genre: "Sci-Fi", 
    rating: 8.8, 
    imageUrl: "images/Inception.webp",
    description: "A mind-bending thriller by Christopher Nolan." 
  },
  { 
    title: "Deadpool And Wolverine", 
    year: 1997, 
    genre: "Romance", 
    rating: 7.8, 
    imageUrl: "images/deadpoolandwolverine.webp",
    description: "A tragic love story aboard the ill-fated RMS Titanic." 
  },
  { 
    title: "Avengers: Age of Ultron", 
    year: 2012, 
    genre: "Action", 
    rating: 8.0, 
    imageUrl: "images/avengers.webp",
    description: "Earth's mightiest heroes team up to save the world." 
  },
  { 
    title: "The Dark Knight", 
    year: 2008, 
    genre: "Action", 
    rating: 9.0, 
    imageUrl: "images/darkknight.webp",
    description: "Batman faces the Joker in Gotham City." 
  }
];

const sports = [
  { 
    title: "FIFA World Cup", 
    year: 2022, 
    type: "Football", 
    location: "Qatar", 
    imageUrl: "images/worldcup.webp",
    description: "The biggest football tournament held in Qatar." 
  },
  { 
    title: "NBA Finals", 
    year: 2023, 
    type: "Basketball", 
    location: "USA", 
    imageUrl: "images/nba.webp",
    description: "The championship series of the NBA." 
  },
  { 
    title: "Super Bowl", 
    year: 2023, 
    type: "American Football", 
    location: "USA", 
    imageUrl: "images/superbowl.webp",
    description: "The NFL's biggest game of the year." 
  },
  { 
    title: "Wimbledon", 
    year: 2023, 
    type: "Tennis", 
    location: "UK", 
    imageUrl: "images/winbeldon.webp",
    description: "The oldest and most prestigious tennis tournament." 
  }
];

const series = [
  { 
    title: "Breaking Bad", 
    year: 2008, 
    genre: "Crime", 
    seasons: 5, 
    imageUrl: "images/breakingbad.webp",
    description: "A chemistry teacher turns to making methamphetamine." 
  },
  { 
    title: "Stranger Things", 
    year: 2016, 
    genre: "Sci-Fi", 
    seasons: 4, 
    imageUrl: "images/strangerthings.webp",
    description: "A group of kids encounters supernatural forces in their town." 
  },
  { 
    title: "Witcher", 
    year: 2011, 
    genre: "Fantasy", 
    seasons: 4, 
    imageUrl: "images/witcher.webp",
    description: "The Witcher follows Geralt, a monster hunter in a dark, magical world." 
  },
  { 
    title: "Superman and Lois", 
    year: 2016, 
    genre: "Fantasy", 
    seasons: 4, 
    imageUrl: "images/superman.webp",
    description: "Superman Series" 
  }
];

// Function to create cards
function createCards(items, sectionId) {
  const section = document.getElementById(sectionId);
  const cardWrapper = section.querySelector(".card-wrapper");
  cardWrapper.innerHTML = ""; // Clear previous cards

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => alert(`${item.title}: ${item.description}`);

    // Populate card content dynamically
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}" />
      <h3>${item.title}</h3>
    
      <p><strong></strong> ${item.rating ? "Rating: " + item.rating : item.seasons ? "Seasons: " + item.seasons : "" + item.type}</p>
    `;

    cardWrapper.appendChild(card);
  });
}

// Populate all sections by default
document.addEventListener("DOMContentLoaded", () => {
  createCards(movies, "moviesSection");
  createCards(sports, "sportsSection");
  createCards(series, "seriesSection");
});

document.querySelector('.message a').addEventListener('click', function () {
  const form = document.querySelector('.form');
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');

  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';

  // Add animation class
  form.classList.add('fade-in');
  setTimeout(() => form.classList.remove('fade-in'), 800); // Remove class after animation
});



document.getElementById('showFormButton').addEventListener('click', function() {
  const form = document.querySelector('.form');
  form.classList.toggle('visible'); // Toggle the 'visible' class
  this.classList.toggle('hidden'); // Hide the button after clicking
});

document.getElementById('showFormButton').addEventListener('click', function() {
  document.getElementById('register-form hidden').classList.toggle('hidden');
  document.getElementById('login-form hidden').classList.toggle('hidden');
  this.classList.toggle('hidden'); // Hide the button after clicking
});

document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open'); // Toggle the 'open' class
      hamButton.classList.toggle('open'); // Toggle the 'open' class on the button
  });
});
