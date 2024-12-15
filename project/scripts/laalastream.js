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
    detailedSummary: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb’s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible-inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be a perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    


  },
  { 
    title: "Deadpool And Wolverine", 
    year: 2024, 
    genre: "Sci-Fi", 
    rating: 7.8, 
    imageUrl: "images/deadpoolandwolverine.webp",
    description: "The Mech with the mouth meets Wolverine",
    detailedSummary: "In a world where mutants and mercenaries collide, Deadpool teams up with Wolverine to take down a powerful enemy. Their journey is filled with action, humor, and unexpected twists as they navigate the challenges of their unique abilities."
  },
  { 
    title: "Avengers: Age of Ultron", 
    year: 2012, 
    genre: "Action", 
    rating: 8.0, 
    imageUrl: "images/avengers.webp",
    description: "Earth's mightiest heroes team up to save the world.",
    detailedSummary: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and it is up to the Avengers to stop the villainous Ultron from enacting his terrible plans. The team must work together to save humanity from extinction."
  },
  { 
    title: "The Dark Knight", 
    year: 2008, 
    genre: "Action", 
    rating: 9.0, 
    imageUrl: "images/darkknight.webp",
    description: "Batman faces the Joker in Gotham City.",
    detailedSummary: "As the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice while facing his own moral dilemmas."
  }
];

const sports = [
  { 
    title: "FIFA World Cup", 
    year: 2022, 
    type: "Football", 
    location: "Qatar", 
    imageUrl: "images/worldcup.webp",
    description: "The biggest football tournament held in Qatar.",
    detailedSummary: "The FIFA World Cup is the most prestigious football tournament in the world, featuring teams from across the globe competing for the ultimate prize. The 2022 edition in Qatar promises to be a spectacular event with thrilling matches and unforgettable moments."
  },
  { 
    title: "NBA Finals", 
    year: 2023, 
    type: "Basketball", 
    location: "USA", 
    imageUrl: "images/nba.webp",
    description: "The championship series of the NBA.",
    detailedSummary: "The NBA Finals is the culmination of the basketball season, where the two best teams compete for the championship title. Fans eagerly await the high-stakes games filled with incredible performances and unforgettable plays."
  },
  { 
    title: "Super Bowl", 
    year: 2023, 
    type: "American Football", 
    location: "USA", 
    imageUrl: "images/superbowl.webp",
    description: "The NFL's biggest game of the year.",
    detailedSummary: "The Super Bowl is the annual championship game of the National Football League (NFL), featuring the best teams in a thrilling showdown. It's a cultural phenomenon, known for its extravagant halftime shows and memorable commercials."
  },
  { 
    title: "Wimbledon", 
    year: 2023, 
    type: "Tennis", 
    location: "UK", 
    imageUrl: "images/winbeldon.webp",
    description: "The oldest and most prestigious tennis tournament.",
    detailedSummary: "Wimbledon is the premier tennis tournament in the world, held annually in London. Known for its rich history and traditions, it attracts the best players who compete for the coveted title on the iconic grass courts."
  }
];

const series = [
  { 
    title: "Breaking Bad", 
    year: 2024, 
    genre: "Crime", 
    seasons: 5, 
    imageUrl: "images/breakingbad.webp",
    description: "A chemistry teacher turns to making methamphetamine.",
    detailedSummary: "Walter White, a high school chemistry teacher turned methamphetamine manufacturer, partners with former student Jesse Pinkman. As they navigate the drug trade, Walter's descent into the criminal underworld leads to moral dilemmas and dangerous confrontations."
  },
  { 
    title: "Stranger Things", 
    year: 2016, 
    genre: "Sci-Fi", 
    seasons: 4, 
    imageUrl: "images/strangerthings.webp",
    description: "A group of kids encounters supernatural forces in their town.",
    detailedSummary: "Set in the 1980s, a group of young friends uncovers a series of supernatural mysteries in their small town. They encounter strange creatures, government conspiracies, and the power of friendship as they search for their missing friend."
  },
  { 
    title: "Witcher", 
    year: 2019, 
    genre: "Fantasy", 
    seasons: 4, 
    imageUrl: "images/witcher.webp",
    description: "The Witcher follows Geralt, a monster hunter in a dark, magical world.",
    detailedSummary: "Geralt of Rivia, a monster hunter known as a Witcher, navigates a world filled with dangerous beasts and treacherous humans. As he seeks to find his place in a chaotic world, he faces moral challenges and battles against dark forces."
  },
  { 
    title: "Superman and Lois", 
    year: 2022, 
    genre: "Fantasy", 
    seasons: 4, 
    imageUrl: "images/superman.webp",
    description: "Superman Series",
    detailedSummary: "Clark Kent and Lois Lane navigate the challenges of parenthood while balancing their superhero responsibilities. As they face new threats, they must protect their family and the world from dangers that lurk in the shadows."
  }
];

// Declare trailerUrl globally
let trailerUrl = '';

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
    link.href = `details.html?title=${encodeURIComponent(item.title)}&type=${encodeURIComponent(item.genre || item.type || "")}&imageUrl=${encodeURIComponent(item.imageUrl)}&description=${encodeURIComponent(item.description)}&year=${encodeURIComponent(item.year || "")}&rating=${encodeURIComponent(item.rating || "")}&detailedSummary=${encodeURIComponent(item.detailedSummary || "")}&trailerUrl=${encodeURIComponent(item.trailerUrl || "")}`;

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

    // Set the global trailerUrl
    trailerUrl = item.trailerUrl; // Assuming you have a trailerUrl property in your items
  });
}

// Populate all sections by default
document.addEventListener("DOMContentLoaded", () => {
  createCards(movies, "moviesSection");
  createCards(sports, "sportsSection");
  createCards(series, "seriesSection");

  // Set up search functionality
  document.getElementById('searchButton').addEventListener('click', function() {
      const searchTerm = document.getElementById('search').value.toLowerCase();
      filterCards(searchTerm);
  });

  // Debounce search input
  let debounceTimer;
  document.getElementById('search').addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
          const searchTerm = this.value.toLowerCase();
          filterCards(searchTerm);
      }, 300); 
  });
});

// Function to filter cards based on search input
function filterCards(searchTerm) {
  const allCards = document.querySelectorAll('.card'); // Select all cards dynamically
  allCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase(); // Get the title of the card
      if (title.includes(searchTerm)) {
          card.style.display = 'block'; // Show card if it matches the search term
      } else {
          card.style.display = 'none'; // Hide card if it doesn't match
      }
  });
}


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
    //  NOTE: The trailerUrl is now included in the href
    link.href = `details.html?title=${encodeURIComponent(item.title)}&type=${encodeURIComponent(item.genre || item.type || "")}&imageUrl=${encodeURIComponent(item.imageUrl)}&description=${encodeURIComponent(item.description)}&year=${encodeURIComponent(item.year || "")}&rating=${encodeURIComponent(item.rating || "")}&detailedSummary=${encodeURIComponent(item.detailedSummary || "")}&trailerUrl=${encodeURIComponent(item.trailerUrl || "")}`;

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

// Script for `details.html`
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  const type = params.get('type');
  const imageUrl = params.get('imageUrl');
  const description = params.get('description');
  const year = params.get('year');
  const rating = parseFloat(params.get('rating'));
  const detailedSummary = params.get('detailedSummary'); 
  const trailerUrl = params.get('trailerUrl');
  
  

  // Update the page content dynamically
  const titleElement = document.getElementById('itemTitle');
  const imageElement = document.getElementById('itemImage');
  const descriptionElement = document.getElementById('itemDescription');
  const yearElement = document.getElementById('itemYear');
  const ratingElement = document.getElementById('itemRating');
  const detailedSummaryElement = document.getElementById("itemDetailedSummary"); 

  if (titleElement) titleElement.textContent = title;
  if (imageElement) imageElement.src = imageUrl;
  if (descriptionElement) descriptionElement.textContent = description;
  if (yearElement) yearElement.textContent = year ? `Year: ${year}` : '';
  if (detailedSummaryElement) detailedSummaryElement.textContent = detailedSummary; 
  if (ratingElement) ratingElement.textContent = rating ? `Rating: ${rating}` : '';

});

