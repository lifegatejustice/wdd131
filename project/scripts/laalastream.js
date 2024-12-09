const image = document.getElementById('myImage');
const images = [
    "images/tvseries.webp",
    "images/movies.webp",
    "images/sport.webp"
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
    imageUrl: "https://via.placeholder.com/150",
    description: "A mind-bending thriller by Christopher Nolan." 
  },
  { 
    title: "Titanic", 
    year: 1997, 
    genre: "Romance", 
    rating: 7.8, 
    imageUrl: "https://via.placeholder.com/150",
    description: "A tragic love story aboard the ill-fated RMS Titanic." 
  },
  { 
    title: "Avengers", 
    year: 2012, 
    genre: "Action", 
    rating: 8.0, 
    imageUrl: "https://via.placeholder.com/150",
    description: "Earth's mightiest heroes team up to save the world." 
  },
  { 
    title: "The Dark Knight", 
    year: 2008, 
    genre: "Action", 
    rating: 9.0, 
    imageUrl: "https://via.placeholder.com/150",
    description: "Batman faces the Joker in Gotham City." 
  }
];

const sports = [
  { 
    title: "FIFA World Cup", 
    year: 2022, 
    type: "Football", 
    location: "Qatar", 
    imageUrl: "https://via.placeholder.com/150",
    description: "The biggest football tournament held in Qatar." 
  },
  { 
    title: "NBA Finals", 
    year: 2023, 
    type: "Basketball", 
    location: "USA", 
    imageUrl: "https://via.placeholder.com/150",
    description: "The championship series of the NBA." 
  },
  { 
    title: "Super Bowl", 
    year: 2023, 
    type: "American Football", 
    location: "USA", 
    imageUrl: "https://via.placeholder.com/150",
    description: "The NFL's biggest game of the year." 
  },
  { 
    title: "Wimbledon", 
    year: 2023, 
    type: "Tennis", 
    location: "UK", 
    imageUrl: "https://via.placeholder.com/150",
    description: "The oldest and most prestigious tennis tournament." 
  }
];

const series = [
  { 
    title: "Breaking Bad", 
    year: 2008, 
    genre: "Crime", 
    seasons: 5, 
    imageUrl: "https://via.placeholder.com/150",
    description: "A chemistry teacher turns to making methamphetamine." 
  },
  { 
    title: "Stranger Things", 
    year: 2016, 
    genre: "Sci-Fi", 
    seasons: 4, 
    imageUrl: "https://via.placeholder.com/150",
    description: "A group of kids encounters supernatural forces in their town." 
  },
  { 
    title: "Game of Thrones", 
    year: 2011, 
    genre: "Fantasy", 
    seasons: 8, 
    imageUrl: "https://via.placeholder.com/150",
    description: "A battle for the Iron Throne in the Seven Kingdoms." 
  },
  { 
    title: "The Crown", 
    year: 2016, 
    genre: "Historical", 
    seasons: 6, 
    imageUrl: "https://via.placeholder.com/150",
    description: "The reign of Queen Elizabeth II." 
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
    
      <p><strong>Details:</strong> ${item.rating ? "Rating: " + item.rating : item.seasons ? "Seasons: " + item.seasons : "Location: " + item.location}</p>
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
