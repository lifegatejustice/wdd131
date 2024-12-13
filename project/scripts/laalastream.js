const image = document.getElementById('myImage');
const images = [
    "images/tvseries.webp",
    "images/movies.webp",
    "images/sport.webp",
    "images/movies2.webp",
    "images/tvseries2.webp",
    "images/sport2.webp",
    "images/movies3.webp"


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
setInterval(changeImage, 5000);


// Data arrays
const movies = [
  { 
    title: "Inception", 
    year: 2010, 
    genre: "Sci-Fi", 
    rating: 8.8, 
    imageUrl: "images/Inception.webp",
    description: "A mind-bending thriller by Christopher Nolan.",
    detailedSummary: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb’s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible-inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be a perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
  },
  { 
    title: "Deadpool And Wolverine", 
    year: 1997, 
    genre: "Sci-Fi", 
    rating: 7.8, 
    imageUrl: "images/deadpoolandwolverine.webp",
    description: "The Mech with the mouth meets Wolverine" 
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

    // Create a clickable link
    const link = document.createElement("a");
    link.href = `details.html?title=${encodeURIComponent(item.title)}&type=${encodeURIComponent(item.genre || item.type || "")}&imageUrl=${encodeURIComponent(item.imageUrl)}&description=${encodeURIComponent(item.description)}&year=${encodeURIComponent(item.year || "")}&rating=${encodeURIComponent(item.rating || "")}&detailedSummary=${encodeURIComponent(item.detailedSummary || "")}`;
    link.title = item.title;
    link.className = "card-link";

    // Populate card content dynamically
    link.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy"/>
      <h3>${item.title}</h3>
      <p>${item.rating ? "Rating: " + item.rating : item.seasons ? "Seasons: " + item.seasons : item.type}</p>
    `;

    // Append the link to the card and the card to the wrapper
    card.appendChild(link);
    cardWrapper.appendChild(card);
  });
}


// Populate all sections by default
document.addEventListener("DOMContentLoaded", () => {
  createCards(movies, "moviesSection");
  createCards(sports, "sportsSection");
  createCards(series, "seriesSection");
});

document.querySelector('.sign').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default jump behavior

  const registerForm = document.getElementById('registerForm');
  const joinNowButton = document.getElementById('showFormButton');

  if (registerForm.classList.contains('hidden')) {
      // Scroll to the Join Now button if the register form is hidden
      joinNowButton.scrollIntoView({ behavior: 'smooth' });
  } else {
      // Scroll to the register form if visible
      registerForm.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('showFormButton').addEventListener('click', function () {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  registerForm.classList.toggle('hidden'); // Toggle register form visibility
  loginForm.classList.toggle('hidden');   // Toggle login form visibility
  this.classList.add('hidden');          // Hide the Join Now button
});

document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  // Toggle navigation visibility
  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open'); // Toggle navigation
      hamButton.classList.toggle('open'); // Toggle button state
  });

  const showFormButton = document.getElementById('showFormButton');
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const messageLinks = document.querySelectorAll('.message a'); // Select the "Already registered?" and "Create an account?" links

  // Show the Register Form when 'Join Now' button is clicked
  showFormButton.addEventListener('click', () => {
    registerForm.classList.remove('hidden'); // Show register form
    registerForm.classList.add('visible'); // Trigger fade-in and slide-in
    loginForm.classList.add('hidden'); // Hide login form
    loginForm.classList.remove('visible'); // Reset the transition for login form
  });

  // Toggle between Login and Register forms when the message link is clicked
  messageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior

      // Toggle the visibility of forms with smooth transition
      registerForm.classList.toggle('visible');
      loginForm.classList.toggle('visible');

      // Toggle the hidden class to make sure the form is shown/hidden correctly
      registerForm.classList.toggle('hidden');
      loginForm.classList.toggle('hidden');
    });
  });
});

// Save selected movie to localStorage
function saveSelectedMovie(movieTitle) {
  localStorage.setItem('selectedMovie', movieTitle);
}

// Get saved movie from localStorage
function getSelectedMovie() {
  return localStorage.getItem('selectedMovie');
}


// Function to create cards dynamically
function createCards(items, sectionId) {
  const section = document.getElementById(sectionId);
  const cardWrapper = section.querySelector(".card-wrapper");
  cardWrapper.innerHTML = ""; // Clear previous cards

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    // Create a clickable link
    const link = document.createElement("a");
    link.href = `details.html?title=${encodeURIComponent(item.title)}&type=${encodeURIComponent(item.genre || item.type || "")}&imageUrl=${encodeURIComponent(item.imageUrl)}&description=${encodeURIComponent(item.description)}&year=${encodeURIComponent(item.year || "")}&rating=${encodeURIComponent(item.rating || "")}`;
    link.title = item.title;
    link.className = "card-link";

    // Populate card content dynamically
    link.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy"/>
      <h3>${item.title}</h3>
      <p><strong></strong> ${item.rating ? "Rating: " + item.rating : item.seasons ? "Seasons: " + item.seasons : item.type}</p>
    `;

    // Append the link to the card and the card to the wrapper
    card.appendChild(link);
    cardWrapper.appendChild(card);
  });
}

// Script for `details.html`
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Extract parameters from the URL
  const title = params.get('title');
  const type = params.get('type');
  const imageUrl = params.get('imageUrl');
  const description = params.get('description');
  const year = params.get('year');
  const rating = parseFloat(params.get('rating')); // Parse rating as a number

  // Update the page content dynamically
  const titleElement = document.getElementById('itemTitle');
  const imageElement = document.getElementById('itemImage');
  const descriptionElement = document.getElementById('itemDescription');
  const yearElement = document.getElementById('itemYear');
  const ratingElement = document.getElementById('itemRating');
  const starsFilledElement = document.querySelector('stars-filled');
  const detailedSummary = document.querySelector('itemDetailedSummary');


  if (titleElement) titleElement.textContent = title;
  if (imageElement) imageElement.src = imageUrl;
  if (descriptionElement) descriptionElement.textContent = description;
  if (yearElement) yearElement.textContent = year ? `Year: ${year}` : '';
  if (ratingElement) ratingElement.textContent = rating ? `Rating: ${rating}` : '';

  // Update star meter based on rating
  document.addEventListener("DOMContentLoaded", () => {
    const numericRating = 8.8; // Replace with actual dynamic rating
    updateStarRating(numericRating);

    // Update the numeric rating display if necessary
    document.getElementById('itemRating').textContent = `${numericRating}/10`;
});


});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  // ... other code to extract URL parameters

  const videoSource = document.getElementById("videoSource");
  videoSource.src = "path/to/your/video.mp4"; // Set the video source
});






